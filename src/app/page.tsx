'use client';

import { useState, useEffect } from 'react';
import Map from '@/components/map/Map';
import { Obras } from '@/components/obras/Obras';
import { InstagramEmbed } from '@/components/social/InstagramEmbed';
import type { Obra } from '@/types';

export default function Home() {
  const [selectedObra, setSelectedObra] = useState<Obra | null>(null);

  // Manejar clic fuera para cerrar el panel de obra
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Si el clic no fue en un marcador o en el panel de obra, cerrar el panel
      if (!target.closest('.marker') && !target.closest('.obra-panel')) {
        setSelectedObra(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex gap-8 h-[calc(100vh-theme(spacing.16))]">
      <div className="w-3/4">
        <Map onMarkerClick={(obra) => setSelectedObra(obra)} />
      </div>
      <div className="w-1/4 obra-panel">
        {selectedObra ? (
          <Obras obra={selectedObra} />
        ) : (
          <InstagramEmbed />
        )}
      </div>
    </div>
  );
}
