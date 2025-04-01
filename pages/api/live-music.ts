import type { NextApiRequest, NextApiResponse } from 'next';

const obras = [
  {
    id: '1',
    name: 'Parque Biblioteca',
    description: 'Construcción del nuevo parque biblioteca municipal',
    coordinates: [-73.3623, 5.538],
    status: 'in_progress',
    location: 'Centro Histórico',
    start_date: '2024-01-15',
    image: '/images/obras/biblioteca.jpg'
  },
  {
    id: '2',
    name: 'Pavimentación Avenida Norte',
    description: 'Renovación y pavimentación de la avenida principal',
    coordinates: [-73.3573, 5.548],
    status: 'planned',
    location: 'Zona Norte',
    start_date: '2024-05-01',
    image: '/images/obras/pavimentacion.jpg'
  },
  {
    id: '3',
    name: 'Plaza de Mercado',
    description: 'Remodelación de la plaza de mercado central',
    coordinates: [-73.3673, 5.535],
    status: 'completed',
    location: 'Centro',
    start_date: '2023-08-15',
    image: '/images/obras/plaza-mercado.jpg'
  },
  {
    id: '4',
    name: 'Parque Recreacional',
    description: 'Construcción de nuevo parque recreacional',
    coordinates: [-73.3523, 5.542],
    status: 'delayed',
    location: 'Zona Sur',
    start_date: '2023-11-01',
    image: '/images/obras/parque.jpg'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    res.status(200).json(obras);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
} 