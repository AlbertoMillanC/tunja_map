'use client';

import { useState, useEffect } from 'react';
import Map from '@/components/map/Map';
import { Obras } from '@/components/obras/Obras';
import { InstagramEmbed } from '@/components/social/InstagramEmbed';
import type { Obra } from '@/types';

export function HomePage() {
  const [selectedObra, setSelectedObra] = useState<Obra | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.marker') && !target.closest('.obra-panel')) {
        setSelectedObra(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex flex-col gap-4 p-4 md:p-0">
      <div className="flex-grow flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4 h-[50vh] md:h-auto rounded-lg overflow-hidden">
          <Map onMarkerClick={(obra) => setSelectedObra(obra)} />
        </div>
        
        <div className="w-full md:w-1/4 obra-panel bg-gray-900 rounded-lg p-4">
          {selectedObra ? (
            <Obras obra={selectedObra} />
          ) : (
            <InstagramEmbed />
          )}
        </div>
      </div>
    </div>
  );
}
