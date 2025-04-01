import mapboxgl from 'mapbox-gl';
import { texts } from '../content/texts';

interface ObraData {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  status: string;
  location?: string;
  start_date?: string;
  image?: string;
}

export const addDataLayer = (
  map: mapboxgl.Map,
  data: any,
  setSelectedMarker: (marker: ObraData | null) => void
) => {
  // Crear una instancia de popup (no se añade al mapa aún)
  const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
    maxWidth: '200px',
    anchor: 'bottom'
  });

  // Asegurarse de que data sea un array
  const obrasData = Array.isArray(data) ? data : [];

  // Agregar fuente de datos
  map.addSource('obras', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: obrasData.map(obra => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: obra.coordinates
        },
        properties: obra
      }))
    }
  });

  // Agregar capa de puntos
  map.addLayer({
    id: 'obras-points',
    type: 'circle',
    source: 'obras',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['zoom'],
        7, 4,
        16, 8
      ],
      'circle-color': [
        'match',
        ['get', 'status'],
        'in_progress', '#ffd700',
        'completed', '#28a745',
        'planned', '#17a2b8',
        'delayed', '#dc3545',
        '#6c757d'
      ],
      'circle-stroke-width': 2,
      'circle-stroke-color': '#fff'
    }
  });

  // Agregar capa de etiquetas
  map.addLayer({
    id: 'obras-labels',
    type: 'symbol',
    source: 'obras',
    layout: {
      'text-field': ['get', 'name'],
      'text-size': 12,
      'text-anchor': 'top',
      'text-offset': [0, 1.5],
      'text-allow-overlap': true
    },
    paint: {
      'text-color': '#000'
    }
  });

  // Agregar eventos de clic
  map.on('click', 'obras-points', (e) => {
    if (e.features && e.features[0]) {
      const feature = e.features[0];
      setSelectedMarker(feature.properties as ObraData);
    }
  });

  // Cambiar el cursor al pasar sobre los puntos
  map.on('mouseenter', 'obras-points', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'obras-points', () => {
    map.getCanvas().style.cursor = '';
  });
};
