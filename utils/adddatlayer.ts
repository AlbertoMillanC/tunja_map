import type { Map } from 'mapbox-gl';
import { texts } from '../content/texts';

interface DatLayerOptions {
  id: string;
  source: string;
  type: 'fill' | 'line' | 'symbol' | 'circle' | 'fill-extrusion' | 'heatmap' | 'hillshade';
  paint?: any;
  layout?: any;
  filter?: any[];
}

export const adddatlayer = (map: Map, options: DatLayerOptions): void => {
  const {
    id,
    source,
    type,
    paint = {},
    layout = {},
    filter = []
  } = options;

  // Verificar si la capa ya existe
  if (map.getLayer(id)) {
    console.warn(`La capa ${id} ya existe en el mapa`);
    return;
  }

  // Verificar si la fuente existe
  if (!map.getSource(source)) {
    console.error(`La fuente ${source} no existe en el mapa`);
    return;
  }

  try {
    map.addLayer({
      id,
      type,
      source,
      paint,
      layout,
      filter
    });
  } catch (error) {
    console.error(`Error al agregar la capa ${id}:`, error);
  }
};

// Función auxiliar para agregar capas de obras
export const addObrasLayer = (map: Map, sourceId: string): void => {
  adddatlayer(map, {
    id: 'obras-fill',
    source: sourceId,
    type: 'fill',
    paint: {
      'fill-color': [
        'match',
        ['get', 'status'],
        'in_progress', '#ffd700',
        'completed', '#28a745',
        'planned', '#17a2b8',
        'delayed', '#dc3545',
        '#6c757d'
      ],
      'fill-opacity': 0.7,
      'fill-outline-color': '#000'
    }
  });

  adddatlayer(map, {
    id: 'obras-outline',
    source: sourceId,
    type: 'line',
    paint: {
      'line-color': '#000',
      'line-width': 1
    }
  });

  adddatlayer(map, {
    id: 'obras-labels',
    source: sourceId,
    type: 'symbol',
    layout: {
      'text-field': ['get', 'name'],
      'text-size': 12,
      'text-anchor': 'center',
      'text-allow-overlap': true
    },
    paint: {
      'text-color': '#000'
    }
  });
}; 