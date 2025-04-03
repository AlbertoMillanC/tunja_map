'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Obra } from '@/types';

// Configurar el token de Mapbox
const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
if (!mapboxToken) {
  console.error('Error: NEXT_PUBLIC_MAPBOX_TOKEN no está definido');
}
mapboxgl.accessToken = mapboxToken || '';

interface MapProps {
  onMarkerClick?: (obra: Obra) => void;
}

// Función para obtener el color según el estado
const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return '#22c55e'; // verde
    case 'in_progress':
      return '#ef4444'; // rojo
    case 'planned':
      return '#2563eb'; // azul
    default:
      return '#2563eb';
  }
};

export default function Map({ onMarkerClick }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [obras, setObras] = useState<Obra[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Cargar las obras
    fetch('/api/obras')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar las obras');
        }
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data.obras)) {
          throw new Error('Formato de datos inválido');
        }
        setObras(data.obras);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!mapboxToken) {
      setError('Error: Token de Mapbox no configurado');
      return;
    }

    try {
      // Inicializar el mapa
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-73.36274, 5.53528], // Plaza de Bolívar de Tunja
        zoom: 15,
        pitch: 45,
        maxBounds: [
          [-73.48274, 5.41528], // Suroeste
          [-73.24274, 5.65528]  // Noreste
        ]
      });

      // Agregar controles
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

      // Agregar control de geolocalización
      const geolocateControl = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true,
        fitBoundsOptions: {
          maxZoom: 15
        }
      });
      map.current.addControl(geolocateControl, 'top-right');

    } catch (err) {
      console.error('Error al inicializar el mapa:', err);
      setError('Error al inicializar el mapa');
    }

    // Limpiar al desmontar
    return () => {
      map.current?.remove();
    };
  }, []);

  // Agregar marcadores cuando se carguen las obras
  useEffect(() => {
    if (!map.current || !obras.length) return;

    try {
      // Eliminar marcadores existentes
      const markers = document.getElementsByClassName('mapboxgl-marker');
      while (markers[0]) {
        markers[0].remove();
      }

      // Agregar nuevos marcadores
      obras.forEach((obra) => {
        if (!obra.location?.lat || !obra.location?.lng) {
          console.warn('Obra sin ubicación:', obra);
          return;
        }

        // Crear el elemento del marcador
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '16px';
        el.style.height = '16px';
        el.style.backgroundSize = 'contain';
        el.style.backgroundPosition = 'center';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.backgroundColor = getStatusColor(obra.status);
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        // Crear el popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2 max-w-[200px]">
              <h3 class="font-semibold text-sm mb-2">${obra.title}</h3>
              ${obra.images?.[0] ? `
                <img 
                  src="${obra.images[0]}" 
                  alt="${obra.title}" 
                  class="w-full h-32 object-cover rounded-lg"
                />
              ` : ''}
            </div>
          `);

        // Agregar el marcador al mapa
        const marker = new mapboxgl.Marker(el)
          .setLngLat([obra.location.lng, obra.location.lat])
          .setPopup(popup)
          .addTo(map.current!);

        // Manejar clic en el marcador
        el.addEventListener('click', () => {
          onMarkerClick?.(obra);
        });
      });
    } catch (err) {
      console.error('Error al agregar marcadores:', err);
      setError('Error al agregar marcadores al mapa');
    }
  }, [obras, onMarkerClick]);

  if (error) {
    return (
      <div className="w-full h-[600px] bg-white rounded-lg shadow-md flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-[600px] bg-white rounded-lg shadow-md" />
  );
}
