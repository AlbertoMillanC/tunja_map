export const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxiZXJ0b21pbGxhbmMiLCJhIjoiY202dTFlbWF6MDl0bDJqcTN2NmY2YWI2cSJ9.8wVHTNkuwYD-j0Q1HjROwg";

export const MAP_CONFIG = {
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.3623, 5.538] as [number, number],
  zoom: 13,
  pitch: 45,
  maxBounds: [
    [-73.5, 5.4],
    [-73.2, 5.7],
  ] as [[number, number], [number, number]]
};

export const API_ROUTES = {
  obras: '/api/obras',
  contact: '/api/contact'
} as const;
