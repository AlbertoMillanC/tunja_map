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
    <div className={styles.obrasList}>
      <h2>Obras de liveMusic</h2>
      <ul>
        {features.map((feature, idx) => (
          <li key={idx}>{feature.properties.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ObrasList;
