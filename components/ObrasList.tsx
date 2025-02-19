import React, { useEffect, useState, useRef } from "react";

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
    <div
      ref={listRef}
      onScroll={handleScroll}
      style={{
        position: "fixed",
        right: 0,
        top: "100px",
        width: "300px",
        height: "70vh",
        overflowY: "auto",
        background: "white",
        border: "1px solid #ccc",
        padding: "1rem",
        boxShadow: "-2px 2px 10px rgba(0,0,0,0.1)"
      }}
    >
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
