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
    const feature = e.features[0];
    const coordinates = (feature.geometry as any).coordinates.slice();
    const properties = feature.properties;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(`
        <div style="text-align:center;">
          <b>${properties.title}</b>
          <p>${properties.venue}</p>
          <p>Eventos: ${properties.event_count}</p>
          <p>Coordenadas: ${coordinates[0]}, ${coordinates[1]}</p>
          <img src="${properties.image}" alt="${properties.title}" style="width:100px;height:auto;margin-top:5px;"/>
        </div>
      `)
      .addTo(map);
  });

  map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
  });
};
