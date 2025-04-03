'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/shared/Spinner';

// Importar el mapa dinámicamente para evitar problemas con SSR
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <Spinner />
});

export function MapClient() {
  return (
    <div className="h-[600px] bg-white rounded-lg shadow-md overflow-hidden">
      <Map />
    </div>
  );
}
