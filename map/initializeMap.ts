import mapboxgl from 'mapbox-gl';

export const initializeMap = (mapContainer: React.RefObject<HTMLDivElement>, lng: number, lat: number, zoom: number): mapboxgl.Map => {
  const map = new mapboxgl.Map({
    container: mapContainer.current!,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
  });

  return map;
};
