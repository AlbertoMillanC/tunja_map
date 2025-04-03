'use client';

import { InstagramEmbed as ReactInstagramEmbed } from 'react-social-media-embed';

interface InstagramEmbedProps {
  postUrl?: string;
}

export function InstagramEmbed({ postUrl = 'https://www.instagram.com/p/C4-KHNxO7co/' }: InstagramEmbedProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-4">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactInstagramEmbed 
          url={postUrl}
          width={328}
        />
      </div>
    </div>
  );
}
