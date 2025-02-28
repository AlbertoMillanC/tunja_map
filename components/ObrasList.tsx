import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

type Feature = {
  properties: {
    title: string;
    // ...existing properties...
  };
};

const ObrasList: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    fetch('/api/liveMusic')
      .then((res) => res.json())
      .then((data) => setFeatures(data.features))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.obrasList} role="complementary" aria-label="Lista de Obras">
      <h3 className={styles.subtitle}>OBRAS PARA TUNJA</h3>
      {/* Internal scroll container for the list */}
      <div className={styles.obrasListInner}>
        <ul role="list">
          {features.map((feature, idx) => (
            <li key={idx} role="listitem" tabIndex={0}>
              {feature.properties.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObrasList;
