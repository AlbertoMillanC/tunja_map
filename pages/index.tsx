import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../maps/initializeMap";
import styles from "../styles/Home.module.css";
import mapboxgl from "mapbox-gl";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const { data, error } = useSWR("/api/liveMusic", fetcher);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxiZXJ0b21pbGxhbmMiLCJhIjoiY202dTFlbWF6MDl0bDJqcTN2NmY2YWI2cSJ9.8wVHTNkuwYD-j0Q1HjROwg";
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
        });
        // Agregar controles de navegación, geolocalización y escala
        newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
        newMap.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }),
          "top-right"
        );
        newMap.addControl(new mapboxgl.ScaleControl({ maxWidth: 80, unit: 'metric' }));
        
        setMap(newMap);
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    if (pageIsMounted && map && data) {
      if (!map.loaded()) {
        map.on("load", () => {
          addDataLayer(map, data);
        });
      } else {
        addDataLayer(map, data);
      }
    }
  }, [pageIsMounted, data, map]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tunja Conectamos con las Obras</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Subtitles */}
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Más de 200 obras entregadas en el 2024</h2>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Ciudad capital más segura de Colombia según estadísticas</h2>
          <h2 className="text-lg font-semibold text-gray-600">Inflación de Tunja 2024: 4.44%, de las más bajas del país</h2>
        </div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div
            ref={mapContainerRef}
            id="my-map"
            style={{ height: 500, width: 500 }}
          />
        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;