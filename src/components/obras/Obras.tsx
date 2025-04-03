'use client';

import { Obra } from '@/types';

interface ObrasProps {
  obra?: Obra;
}

export function Obras({ obra }: ObrasProps) {
  if (!obra) return null;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completada';
      case 'in_progress':
        return 'En ejecución';
      case 'planned':
        return 'Planeada';
      default:
        return status;
    }
  };

  const formatCurrency = (amount: string) => {
    const numericAmount = amount.replace(/[^0-9]/g, '');
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Number(numericAmount));
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">{obra.title}</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-300">Descripción</h3>
          <p className="text-gray-400">{obra.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Estado</h3>
          <p className="text-gray-400">{formatStatus(obra.status)}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Presupuesto</h3>
          <p className="text-gray-400">{formatCurrency(obra.budget)}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Fechas</h3>
          <p className="text-gray-400">
            <span className="font-medium">Inicio:</span> {formatDate(obra.startDate)}
            <br />
            <span className="font-medium">Finalización:</span> {formatDate(obra.endDate)}
          </p>
        </div>
      </div>
    </div>
  );
}
