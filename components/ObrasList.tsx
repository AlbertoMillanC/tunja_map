import React from "react";
import styles from "../styles/Home.module.css";

interface MarkerData {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  status: string;
  location?: string;
  start_date?: string;
  image?: string;
}

interface ObrasListProps {
  markerData: MarkerData | null;
  onClose: () => void;
}

const ObrasList = ({ markerData, onClose }: ObrasListProps) => {
  if (!markerData) {
    return null;
  }

  return (
    <div className={styles.obrasList}>
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>
      <h2>{markerData.name}</h2>
      {markerData.image && (
        <div className={styles.obrasImageContainer}>
          <img 
            src={markerData.image} 
            alt={markerData.name}
            className={styles.obrasImage}
          />
        </div>
      )}
      <div className={styles.obrasDetails}>
        <p><strong>Estado:</strong> {markerData.status}</p>
        {markerData.location && (
          <p><strong>Ubicación:</strong> {markerData.location}</p>
        )}
        {markerData.start_date && (
          <p><strong>Fecha:</strong> {markerData.start_date}</p>
        )}
        <p><strong>Descripción:</strong> {markerData.description}</p>
      </div>
    </div>
  );
};

export default ObrasList;
