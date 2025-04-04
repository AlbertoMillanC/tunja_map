'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ReactInstagramEmbed = dynamic(
  () => import('react-social-media-embed').then(mod => mod.InstagramEmbed),
  { ssr: false }
);

interface InstagramEmbedProps {
  postUrl?: string;
}

export function InstagramEmbed({ postUrl = 'https://www.instagram.com/alcaldiadetunja/' }: InstagramEmbedProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-4">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Suspense fallback={<div className="text-white">Cargando Instagram...</div>}>
          <ReactInstagramEmbed 
            url={postUrl}
            width={328}
          />
        </Suspense>
      </div>
    </div>
  );
}
