import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

const ITEMS_PER_BATCH = 20;
const TOTAL_ITEMS = 200;
const allObras = Array.from({ length: TOTAL_ITEMS }, (_, i) => `Obra ${i + 1}`);

const ObrasList: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    setVisibleItems((prev) => {
      const nextItems = allObras.slice(prev.length, prev.length + ITEMS_PER_BATCH);
      return [...prev, ...nextItems];
    });
  };

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadMore();
      }
    }
  };

  return (
    <div ref={listRef} onScroll={handleScroll} className={styles.obrasList}>
      <h2>Más de 200 obras entregadas en el 2024</h2>
      <ul>
        {visibleItems.map((obra, index) => (
          <li key={index}>{obra}</li>
        ))}
      </ul>
    </div>
  );
};

export default ObrasList;
