'use client';

import type { Obra } from '@/types';

interface ObrasProps {
  obra: Obra;
}

export function Obras({ obra }: ObrasProps) {
  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completada';
      case 'in_progress':
        return 'En Progreso';
      case 'planned':
        return 'Planeada';
      default:
        return 'Estado Desconocido';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-red-500';
      case 'planned':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
      <div className="p-4 space-y-3">
        <h2 className="text-lg md:text-base font-semibold">{obra.title}</h2>
        <p className="text-sm text-gray-300">{obra.description}</p>
        
        <div className="flex flex-wrap gap-3 text-sm">
          <span className={`px-2 py-1 rounded-full ${getStatusColor(obra.status)}`}>
            {getStatusText(obra.status)}
          </span>
          <span className="px-2 py-1 bg-gray-700 rounded-full">
            Presupuesto: ${obra.budget}
          </span>
        </div>
        
        <div className="text-sm text-gray-300 space-y-1">
          <p>Inicio: {new Date(obra.startDate).toLocaleDateString()}</p>
          <p>Fin: {new Date(obra.endDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
