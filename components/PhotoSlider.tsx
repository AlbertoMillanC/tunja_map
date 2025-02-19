mport { useEffect, useState } from "react";

const images = [
  "https://via.placeholder.com/600x400?text=Imagen+1",
  "https://via.placeholder.com/600x400?text=Imagen+2",
  "https://via.placeholder.com/600x400?text=Imagen+3",
];

const PhotoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="photoSlider"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === current ? "active" : ""}`}
          >
            <img src={src} className="d-block w-100" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
