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
  const { data, error } = useSWR("/api/liveMusic", fetcher);
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
        });
        newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
        newMap.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocation: true,
          }),
          "top-right"
        );
        newMap.addControl(new mapboxgl.ScaleControl({ maxWidth: 80, unit: "metric" }));
        setMap(newMap);
      }
    };
    initialize();
  }, []);

  useEffect(() => {
    if (pageIsMounted && map && data) {
      if (!map.loaded()) {
        map.on("load", () => {
          addDataLayer(map, data, setSelectedMarker);
        });
      } else {
        addDataLayer(map, data, setSelectedMarker);
      }
    }
  }, [pageIsMounted, data, map]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className={styles.navbarContainer}>
          {/* Navbar component handles the title and links */}
          <Navbar />
        </div>
      </header>

      {/* Main Content with three columns */}
      <div className={styles.threeColumn}>
        <div className={styles.column}>
          <InstagramEmbed postUrl="https://www.instagram.com/alcaldiadetunja" />
        </div>
        <div className={styles.column}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.mapSection}>
            <div ref={mapContainerRef} id="my-map" style={{ height: "500px", width: "100%" }} />
          </main>
        </div>
        <div className={styles.column}>
          <ObrasList markerData={selectedMarker} />
        </div>
      </div>

      {/* Footer */}
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