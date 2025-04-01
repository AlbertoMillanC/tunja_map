import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import { addDataLayer } from "../map/addDataLayer";
import styles from "../styles/Home.module.css";
import mapboxgl from "mapbox-gl";
import ObrasList from "../components/ObrasList";
import InstagramEmbed from "../components/InstagramEmbed";
import Navbar from "../components/Navbar";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const { data, error } = useSWR("/api/live-music", fetcher);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYWxiZXJ0b21pbGxhbmMiLCJhIjoiY202dTFlbWF6MDl0bDJqcTN2NmY2YWI2cSJ9.8wVHTNkuwYD-j0Q1HjROwg";
    setPageIsMounted(true);

    const initialize = async () => {
      if (mapContainerRef.current) {
        const newMap = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-73.3623, 5.538],
          zoom: 12.5,
          pitch: 45,
          maxBounds: [
            [-73.5, 5.4],
            [-73.2, 5.7],
          ],
          preserveDrawingBuffer: true
        });

        newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
        newMap.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: { 
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            },
            trackUserLocation: true,
            showUserHeading: true,
            showAccuracyCircle: true,
            fitBoundsOptions: {
              maxZoom: 15,
              padding: 50
            }
          }),
          "top-right"
        );
        newMap.addControl(new mapboxgl.ScaleControl({ maxWidth: 80, unit: "metric" }));

        // Añadir evento de clic en el mapa
        newMap.on('click', (e) => {
          // Verificar si el clic fue en un marcador
          const features = newMap.queryRenderedFeatures(e.point, {
            layers: ['obras-points']
          });

          // Si no se hizo clic en un marcador, cerrar el ObrasList
          if (features.length === 0) {
            setSelectedMarker(null);
          }
        });

        newMap.on('load', () => {
          setMap(newMap);
        });
      }
    };

    initialize();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (pageIsMounted && map && data) {
      // Remover capas y fuente existentes antes de agregar nuevas
      if (map.getLayer('obras-points')) {
        map.removeLayer('obras-points');
      }
      if (map.getLayer('obras-labels')) {
        map.removeLayer('obras-labels');
      }
      if (map.getSource('obras')) {
        map.removeSource('obras');
      }

      // Agregar nuevas capas con los datos
      addDataLayer(map, data, setSelectedMarker);
    }
  }, [pageIsMounted, data, map]);

  // Función para cerrar el ObrasList
  const closeObrasList = () => {
    setSelectedMarker(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <Navbar />
      </header>

      <div className={styles.threeColumn}>
        <div className={`${styles.column} ${styles.mapColumn}`}>
          <Head>
            <title>Mapa de Obras - Tunja</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.mapSection}>
            <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
          </main>
        </div>

        <div className={styles.secondaryColumns}>
          {selectedMarker && (
            <div className={`${styles.column} ${styles.obrasColumn}`}>
              <ObrasList markerData={selectedMarker} onClose={closeObrasList} />
            </div>
          )}

          <div className={`${styles.column} ${styles.instagramColumn}`}>
            <InstagramEmbed postUrl="https://www.instagram.com/alcaldiadetunja" />
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;