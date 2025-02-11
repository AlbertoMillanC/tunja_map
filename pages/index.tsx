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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Se eliminó la hoja de estilos de Mapbox.
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        /> */}
      </Head>

      <main className={styles.main}>
        <div
          ref={mapContainerRef}
          id="my-map"
          style={{ height: 500, width: 500 }}
        />
      </main>

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