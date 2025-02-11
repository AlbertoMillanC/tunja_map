import mapboxgl from 'mapbox-gl';

export const addDataLayer = (map: mapboxgl.Map, data: any) => {
  map.addSource('places', {
    type: 'geojson',
    data: data,
  });

  map.addLayer({
    id: 'places',
    type: 'circle',
    source: 'places',
    paint: {
      'circle-color': '#4264fb',
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

  map.on('click', 'places', (e) => {
    const coordinates = (e.features[0].geometry as any).coordinates.slice();
    const properties = e.features[0].properties;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(`<b>${properties.title}</b><p>${properties.venue}</p>`)
      .addTo(map);
  });

  map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
  });
};
