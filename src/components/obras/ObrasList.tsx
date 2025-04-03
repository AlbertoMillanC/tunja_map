import React from 'react';
import Image from 'next/image';
import { Obra } from '@/types';

interface ObrasListProps {
  obras: Obra[];
  onObraClick?: (obra: Obra) => void;
}

export const ObrasList: React.FC<ObrasListProps> = ({ obras, onObraClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {obras.map((obra) => (
        <div
          key={obra.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onObraClick?.(obra)}
        >
          {obra.images[0] && (
            <div className="relative h-48">
              <Image
                src={obra.images[0]}
                alt={obra.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{obra.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{obra.description}</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Estado: <span className="font-medium">{obra.status}</span>
              </span>
              <span className="text-gray-500">
                Presupuesto: <span className="font-medium">${obra.budget.toLocaleString()}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ObrasList;
