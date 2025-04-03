declare module 'mapbox-gl' {
  export interface Map {
    getLayer(id: string): any;
    getSource(id: string): any;
    addLayer(layer: any): void;
    addSource(id: string, source: any): void;
    removeLayer(id: string): void;
    removeSource(id: string): void;
    addControl(control: IControl, position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'): void;
    remove(): void;
    isStyleLoaded(): boolean;
    on(event: string, layer: string, handler: (e: any) => void): void;
    on(event: string, handler: (e: any) => void): void;
    getCanvas(): { style: any };
  }

  export interface IControl {
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }

  export interface MapboxEvent {
    type: string;
    target: Map;
    point: { x: number; y: number };
    lngLat: { lng: number; lat: number };
    features?: any[];
  }

  export class Map {
    constructor(options: {
      container: HTMLElement | string;
      style: string;
      center: [number, number];
      zoom: number;
      pitch?: number;
      maxBounds?: [[number, number], [number, number]];
      preserveDrawingBuffer?: boolean;
    });
  }

  export class NavigationControl implements IControl {
    constructor();
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }

  export class GeolocateControl implements IControl {
    constructor(options: {
      positionOptions?: {
        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;
      };
      trackUserLocation?: boolean;
      showUserHeading?: boolean;
      showAccuracyCircle?: boolean;
      fitBoundsOptions?: {
        maxZoom?: number;
        padding?: number;
      };
    });
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }

  export class ScaleControl implements IControl {
    constructor(options: { maxWidth?: number; unit?: string });
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }

  export class Popup {
    constructor(options?: {
      closeButton?: boolean;
      closeOnClick?: boolean;
      maxWidth?: string;
      anchor?: string;
    });
    setLngLat(coordinates: [number, number]): Popup;
    setHTML(html: string): Popup;
    addTo(map: Map): Popup;
  }

  export let accessToken: string;
} 