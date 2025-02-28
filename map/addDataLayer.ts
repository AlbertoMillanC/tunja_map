import mapboxgl from 'mapbox-gl';

export const addDataLayer = (
  map: mapboxgl.Map,
  data: any,
  setSelectedMarker: (markerData: any) => void
) => {
  // Create a popup instance (not added to the map yet)
  const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
    maxWidth: '300px'
  });

  map.addSource("places", {
    type: "geojson",
    data: data
  });

  map.addLayer({
    id: "places",
    type: "circle",
    source: "places",
    paint: {
      "circle-color": "#4264fb", // blue tone
      "circle-radius": 8,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff"
    }
  });

  // Handle click events on the places layer
  map.on("click", "places", (e) => {
    if (e.features && e.features[0]) {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;

      // Construct popup content with title, venue, image and location if available
      const popupContent = `
        <div class="popup-content">
          <h3>${properties.title}</h3>
          ${properties.image ? `<img src="${properties.image}" alt="${properties.title}" style="width:100%; border-radius:4px; margin-bottom: 10px;">` : ''}
          <p><strong>Lugar:</strong> ${properties.venue}</p>
          ${properties.location ? `<p><strong>Ubicación:</strong> ${properties.location}</p>` : ''}
          ${properties.start_date ? `<p><strong>Fecha:</strong> ${properties.start_date}</p>` : ''}
        </div>
      `;

      // Adjust coordinates so the popup appears correctly
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Set popup content and location then add to the map.
      popup
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);

      // Update selected marker state
      setSelectedMarker(properties);
    }
  });

  // Change cursor to pointer when hovering over places
  map.on("mouseenter", "places", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
  });
};
