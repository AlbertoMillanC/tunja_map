import type { NextApiRequest, NextApiResponse } from 'next';

// Datos de ejemplo para live music
const liveMusicData = [
  {
    id: '1',
    name: 'Concierto en Plaza de Bolívar',
    description: 'Presentación de música en vivo en la Plaza de Bolívar',
    coordinates: [-73.3623, 5.538],
    status: 'in_progress',
    location: 'Plaza de Bolívar, Tunja',
    start_date: '2024-04-15',
    image: '/images/plaza-bolivar.jpg'
  },
  {
    id: '2',
    name: 'Festival de Jazz',
    description: 'Festival anual de jazz en el Parque Santander',
    coordinates: [-73.3523, 5.548],
    status: 'planned',
    location: 'Parque Santander, Tunja',
    start_date: '2024-05-20',
    image: '/images/parque-santander.jpg'
  },
  {
    id: '3',
    name: 'Concierto al Aire Libre',
    description: 'Presentación de bandas locales en el Parque de la Independencia',
    coordinates: [-73.3723, 5.528],
    status: 'completed',
    location: 'Parque de la Independencia, Tunja',
    start_date: '2024-03-10',
    image: '/images/parque-independencia.jpg'
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
    res.status(200).json(liveMusicData);
  } catch (error) {
    console.error('Error fetching live music data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
} 