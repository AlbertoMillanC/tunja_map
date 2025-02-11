import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3623, 5.538] },
        properties: {
          title: "Obra de reparcheo",
          cluster: false,
          venue: "Cra 9 con calle 23l",
          event_count: 15,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_jIBH6qT0bUKaJIdfT47EXUXSOYieirFJQ&s",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3623, 5.538] },
        properties: {
          title: "Reparación de pavimento en Carrera 9",
          cluster: false,
          venue: "Carrera 9 con Calle 23, Centro de Tunja",
          event_count: 15,
          image: "https://via.placeholder.com/150",
          description: "Reparación del pavimento dañado en la Carrera 9 del centro de Tunja",
          start_date: "2024-01-15",
          end_date: "2024-03-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3800, 5.5600] },
        properties: {
          title: "Construcción de acueducto rural",
          cluster: false,
          venue: "Vereda La Vega",
          event_count: 12,
          image: "https://via.placeholder.com/150",
          description: "Instalación de tuberías de agua potable en la vereda La Vega",
          start_date: "2024-01-10",
          end_date: "2024-06-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3750, 5.5550] },
        properties: {
          title: "Reparación de caminos rurales",
          cluster: false,
          venue: "Vereda San Miguel",
          event_count: 18,
          image: "https://via.placeholder.com/150",
          description: "Reparación de vías terciarias en la vereda San Miguel",
          start_date: "2024-02-15",
          end_date: "2024-08-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3900, 5.5400] },
        properties: {
          title: "Construcción de parque recreativo",
          cluster: false,
          venue: "Barrio La Esperanza",
          event_count: 10,
          image: "https://via.placeholder.com/150",
          description: "Construcción de un nuevo parque con áreas deportivas en el barrio La Esperanza",
          start_date: "2024-03-01",
          end_date: "2024-11-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3850, 5.5350] },
        properties: {
          title: "Rehabilitación de escuela rural",
          cluster: false,
          venue: "Vereda El Rosal",
          event_count: 14,
          image: "https://via.placeholder.com/150",
          description: "Reparación de infraestructura educativa en la escuela de la vereda El Rosal",
          start_date: "2024-04-10",
          end_date: "2024-12-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3780, 5.5200] },
        properties: {
          title: "Ampliación de red eléctrica",
          cluster: false,
          venue: "Vereda San José",
          event_count: 16,
          image: "https://via.placeholder.com/150",
          description: "Extensión de la red eléctrica para beneficiar hogares rurales en la vereda San José",
          start_date: "2024-05-01",
          end_date: "2024-10-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3650, 5.5100] },
        properties: {
          title: "Construcción de alcantarillado pluvial",
          cluster: false,
          venue: "Barrio Los Alpes",
          event_count: 20,
          image: "https://via.placeholder.com/150",
          description: "Instalación de sistemas de drenaje en el barrio Los Alpes",
          start_date: "2024-06-15",
          end_date: "2024-12-10"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3700, 5.5050] },
        properties: {
          title: "Reparación de andenes",
          cluster: false,
          venue: "Barrio San Rafael",
          event_count: 13,
          image: "https://via.placeholder.com/150",
          description: "Reparación de andenes deteriorados en el barrio San Rafael",
          start_date: "2024-07-01",
          end_date: "2024-11-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3820, 5.5150] },
        properties: {
          title: "Construcción de vivienda digna",
          cluster: false,
          venue: "Barrio Las Acacias",
          event_count: 15,
          image: "https://via.placeholder.com/150",
          description: "Construcción de viviendas para familias vulnerables en el barrio Las Acacias",
          start_date: "2024-08-10",
          end_date: "2025-01-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3680, 5.5250] },
        properties: {
          title: "Reparación de puentes vehiculares",
          cluster: false,
          venue: "Vereda La Unión",
          event_count: 11,
          image: "https://via.placeholder.com/150",
          description: "Reparación de puentes dañados por deslizamientos en la vereda La Unión",
          start_date: "2024-09-01",
          end_date: "2024-12-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3720, 5.5300] },
        properties: {
          title: "Construcción de ciclorrutas rurales",
          cluster: false,
          venue: "Vereda San Antonio",
          event_count: 17,
          image: "https://via.placeholder.com/150",
          description: "Construcción de ciclorrutas para conectar veredas en la vereda San Antonio",
          start_date: "2024-10-15",
          end_date: "2025-01-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3840, 5.5450] },
        properties: {
          title: "Reparación de muros de contención",
          cluster: false,
          venue: "Barrio Santa Ana",
          event_count: 14,
          image: "https://via.placeholder.com/150",
          description: "Reparación de muros afectados por lluvias en el barrio Santa Ana",
          start_date: "2024-11-01",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3660, 5.5500] },
        properties: {
          title: "Construcción de canchas deportivas",
          cluster: false,
          venue: "Barrio El Bosque",
          event_count: 12,
          image: "https://via.placeholder.com/150",
          description: "Construcción de canchas múltiples en espacios públicos del barrio El Bosque",
          start_date: "2024-12-01",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3770, 5.5550] },
        properties: {
          title: "Reparación de redes de gas",
          cluster: false,
          venue: "Barrio San Francisco",
          event_count: 16,
          image: "https://via.placeholder.com/150",
          description: "Reparación de fugas en redes de gas residenciales en el barrio San Francisco",
          start_date: "2024-01-15",
          end_date: "2024-05-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3880, 5.5600] },
        properties: {
          title: "Construcción de centros culturales",
          cluster: false,
          venue: "Barrio La Floresta",
          event_count: 10,
          image: "https://via.placeholder.com/150",
          description: "Construcción de un centro cultural comunitario en el barrio La Floresta",
          start_date: "2024-02-20",
          end_date: "2024-09-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3690, 5.5650] },
        properties: {
          title: "Reparación de alumbrado público",
          cluster: false,
          venue: "Barrio San Martín",
          event_count: 13,
          image: "https://via.placeholder.com/150",
          description: "Reparación de luminarias en calles principales del barrio San Martín",
          start_date: "2024-03-25",
          end_date: "2024-07-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3730, 5.5700] },
        properties: {
          title: "Construcción de zonas verdes",
          cluster: false,
          venue: "Vereda La Primavera",
          event_count: 9,
          image: "https://via.placeholder.com/150",
          description: "Recuperación de áreas verdes en la vereda La Primavera",
          start_date: "2024-04-10",
          end_date: "2024-10-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3810, 5.5750] },
        properties: {
          title: "Reparación de sistemas de riego",
          cluster: false,
          venue: "Vereda San Pedro",
          event_count: 15,
          image: "https://via.placeholder.com/150",
          description: "Reparación de sistemas de riego agrícola en la vereda San Pedro",
          start_date: "2024-05-15",
          end_date: "2024-11-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3670, 5.5800] },
        properties: {
          title: "Construcción de pasos peatonales",
          cluster: false,
          venue: "Barrio San Juan",
          event_count: 11,
          image: "https://via.placeholder.com/150",
          description: "Construcción de nuevos pasos peatonales seguros en el barrio San Juan",
          start_date: "2024-06-20",
          end_date: "2024-12-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3740, 5.5850] },
        properties: {
          title: "Reparación de techos escolares",
          cluster: false,
          venue: "Escuela Vereda El Carmen",
          event_count: 14,
          image: "https://via.placeholder.com/150",
          description: "Reparación de techos dañados por tormentas en la Escuela de la vereda El Carmen",
          start_date: "2024-07-25",
          end_date: "2025-01-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3830, 5.5900] },
        properties: {
          title: "Construcción de gimnasios al aire libre",
          cluster: false,
          venue: "Barrio El Progreso",
          event_count: 8,
          image: "https://via.placeholder.com/150",
          description: "Instalación de equipos deportivos en espacios públicos del barrio El Progreso",
          start_date: "2024-08-10",
          end_date: "2024-12-10"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3680, 5.5950] },
        properties: {
          title: "Reparación de señalización vial",
          cluster: false,
          venue: "Avenida Norte",
          event_count: 12,
          image: "https://via.placeholder.com/150",
          description: "Instalación de señales viales para mejorar la movilidad en la Avenida Norte",
          start_date: "2024-09-15",
          end_date: "2025-01-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3760, 5.6000] },
        properties: {
          title: "Construcción de parques infantiles",
          cluster: false,
          venue: "Barrio San Antonio",
          event_count: 10,
          image: "https://via.placeholder.com/150",
          description: "Construcción de áreas de juego para niños en el barrio San Antonio",
          start_date: "2024-10-20",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3850, 5.6050] },
        properties: {
          title: "Reparación de sistemas de drenaje",
          cluster: false,
          venue: "Barrio Las Margaritas",
          event_count: 16,
          image: "https://via.placeholder.com/150",
          description: "Reparación de sistemas de drenaje pluvial en el barrio Las Margaritas",
          start_date: "2024-11-25",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3690, 5.6100] },
        properties: {
          title: "Construcción de ciclorrutas urbanas",
          cluster: false,
          venue: "Barrio San José",
          event_count: 20,
          image: "https://via.placeholder.com/150",
          description: "Ampliación de la red de ciclorrutas en el barrio San José",
          start_date: "2024-12-05",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.361, 5.535] },
        properties: {
          title: "Catedral Basílica Metropolitana",
          cluster: false,
          venue: "catedral-tunja",
          event_count: 10,
          image: "/images/catedral-tunja.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.364, 5.537] },
        properties: {
          title: "Casa Fundador Gonzalo Suárez Rendón",
          cluster: false,
          venue: "casa-fundador",
          event_count: 5,
          image: "/images/casa-fundador.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.363, 5.539] },
        properties: {
          title: "Puente San Francisco",
          cluster: false,
          venue: "puente-san-francisco",
          event_count: 8,
          image: "/images/puente-san-francisco.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.365, 5.536] },
        properties: {
          title: "Parque Santander",
          cluster: false,
          venue: "parque-santander",
          event_count: 12,
          image: "/images/parque-santander.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.366, 5.534] },
        properties: {
          title: "UPTC - Sede Central",
          cluster: false,
          venue: "uptc",
          event_count: 20,
          image: "/images/uptc.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.367, 5.538] },
        properties: {
          title: "Iglesia Santo Domingo",
          cluster: false,
          venue: "iglesia-santo-domingo",
          event_count: 7,
          image: "/images/iglesia-santo-domingo.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.368, 5.535] },
        properties: {
          title: "Convento Santo Domingo",
          cluster: false,
          venue: "convento-santo-domingo",
          event_count: 1,
          image: "/images/convento-santo-domingo.jpg",
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3623, 5.538] },
        properties: {
          title: "Reparación de pavimento en Carrera 9",
          cluster: false,
          venue: "Carrera 9 con Calle 23",
          event_count: 15,
          image: "https://via.placeholder.com/150",
          description: "Reparación del pavimento dañado en la Carrera 9.",
          start_date: "2024-01-15",
          end_date: "2024-03-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3500, 5.545] },
        properties: {
          title: "Construcción de ciclo-ruta en Avenida Norte",
          cluster: false,
          venue: "Avenida Norte entre Calles 10 y 15",
          event_count: 20,
          image: "https://via.placeholder.com/150",
          description: "Construcción de una nueva ciclo-ruta para fomentar el transporte sostenible.",
          start_date: "2024-04-01",
          end_date: "2024-06-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3700, 5.520] },
        properties: {
          title: "Rehabilitación del Parque Principal",
          cluster: false,
          venue: "Parque Principal de Tunja",
          event_count: 10,
          image: "https://via.placeholder.com/150",
          description: "Rehabilitación integral del Parque Principal incluyendo jardines y áreas recreativas.",
          start_date: "2024-07-01",
          end_date: "2024-12-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3650, 5.530] },
        properties: {
          title: "Ampliación de la red de alcantarillado",
          cluster: false,
          venue: "Barrio San Francisco",
          event_count: 25,
          image: "https://via.placeholder.com/150",
          description: "Ampliación de la red de alcantarillado para mejorar el servicio en el barrio San Francisco.",
          start_date: "2025-01-01",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3610, 5.540] },
        properties: {
          title: "Mantenimiento de alumbrado público",
          cluster: false,
          venue: "Calle 15 entre Carreras 8 y 10",
          event_count: 12,
          image: "https://via.placeholder.com/150",
          description: "Reparación y mantenimiento de luminarias en las calles principales.",
          start_date: "2024-02-01",
          end_date: "2024-03-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3580, 5.535] },
        properties: {
          title: "Construcción de andenes en Barrio La Floresta",
          cluster: false,
          venue: "Barrio La Floresta",
          event_count: 18,
          image: "https://via.placeholder.com/150",
          description: "Construcción de andenes para mejorar la movilidad peatonal.",
          start_date: "2024-05-01",
          end_date: "2024-08-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3630, 5.525] },
        properties: {
          title: "Reparación de acueducto en Barrio San Rafael",
          cluster: false,
          venue: "Barrio San Rafael",
          event_count: 14,
          image: "https://via.placeholder.com/150",
          description: "Reparación de tuberías de agua potable en el barrio San Rafael.",
          start_date: "2024-06-15",
          end_date: "2024-09-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3550, 5.542] },
        properties: {
          title: "Pavimentación de vías secundarias",
          cluster: false,
          venue: "Barrio El Bosque",
          event_count: 16,
          image: "https://via.placeholder.com/150",
          description: "Pavimentación de vías secundarias en el barrio El Bosque.",
          start_date: "2024-07-10",
          end_date: "2024-11-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3680, 5.532] },
        properties: {
          title: "Construcción de parques infantiles",
          cluster: false,
          venue: "Barrio Santa Ana",
          event_count: 8,
          image: "https://via.placeholder.com/150",
          description: "Construcción de nuevos parques infantiles en espacios públicos.",
          start_date: "2024-08-01",
          end_date: "2024-12-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3640, 5.537] },
        properties: {
          title: "Reparación de canales pluviales",
          cluster: false,
          venue: "Calle 20 con Carrera 12",
          event_count: 22,
          image: "https://via.placeholder.com/150",
          description: "Limpieza y reparación de canales pluviales para evitar inundaciones.",
          start_date: "2024-09-01",
          end_date: "2024-11-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3690, 5.528] },
        properties: {
          title: "Construcción de puentes peatonales",
          cluster: false,
          venue: "Avenida Sur",
          event_count: 10,
          image: "https://via.placeholder.com/150",
          description: "Construcción de dos puentes peatonales en puntos críticos.",
          start_date: "2024-10-01",
          end_date: "2025-01-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3670, 5.533] },
        properties: {
          title: "Rehabilitación de escuelas públicas",
          cluster: false,
          venue: "Escuela San José",
          event_count: 13,
          image: "https://via.placeholder.com/150",
          description: "Rehabilitación de infraestructura educativa en escuelas públicas.",
          start_date: "2024-11-01",
          end_date: "2025-01-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3660, 5.536] },
        properties: {
          title: "Instalación de cámaras de seguridad",
          cluster: false,
          venue: "Barrio Las Acacias",
          event_count: 17,
          image: "https://via.placeholder.com/150",
          description: "Instalación de cámaras de seguridad en puntos estratégicos.",
          start_date: "2024-12-01",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3620, 5.539] },
        properties: {
          title: "Mejoramiento de zonas verdes",
          cluster: false,
          venue: "Barrio Los Alpes",
          event_count: 9,
          image: "https://via.placeholder.com/150",
          description: "Recuperación de zonas verdes y espacios públicos.",
          start_date: "2024-01-10",
          end_date: "2024-04-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3615, 5.541] },
        properties: {
          title: "Construcción de nuevas viviendas sociales",
          cluster: false,
          venue: "Barrio El Progreso",
          event_count: 20,
          image: "https://via.placeholder.com/150",
          description: "Construcción de viviendas sociales para familias de bajos recursos.",
          start_date: "2024-02-15",
          end_date: "2024-09-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3635, 5.534] },
        properties: {
          title: "Reparación de sistemas eléctricos",
          cluster: false,
          venue: "Barrio San Martín",
          event_count: 11,
          image: "https://via.placeholder.com/150",
          description: "Reparación de redes eléctricas en sectores vulnerables.",
          start_date: "2024-03-01",
          end_date: "2024-06-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3645, 5.538] },
        properties: {
          title: "Construcción de gimnasios al aire libre",
          cluster: false,
          venue: "Parque Central",
          event_count: 7,
          image: "https://via.placeholder.com/150",
          description: "Instalación de equipos deportivos en parques públicos.",
          start_date: "2024-04-10",
          end_date: "2024-08-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3655, 5.532] },
        properties: {
          title: "Reparación de muros de contención",
          cluster: false,
          venue: "Calle 18 con Carrera 15",
          event_count: 14,
          image: "https://via.placeholder.com/150",
          description: "Reparación de muros de contención para prevenir deslizamientos.",
          start_date: "2024-05-15",
          end_date: "2024-10-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3665, 5.536] },
        properties: {
          title: "Construcción de centros comunitarios",
          cluster: false,
          venue: "Barrio San Antonio",
          event_count: 12,
          image: "https://via.placeholder.com/150",
          description: "Construcción de centros comunitarios para actividades culturales.",
          start_date: "2024-06-20",
          end_date: "2024-12-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3675, 5.530] },
        properties: {
          title: "Reparación de pasos peatonales elevados",
          cluster: false,
          venue: "Avenida Oriental",
          event_count: 10,
          image: "https://via.placeholder.com/150",
          description: "Reparación de pasos peatonales elevados para mayor seguridad.",
          start_date: "2024-07-25",
          end_date: "2024-11-15"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3685, 5.534] },
        properties: {
          title: "Instalación de señalización vial",
          cluster: false,
          venue: "Carrera 10 con Calle 12",
          event_count: 13,
          image: "https://via.placeholder.com/150",
          description: "Instalación de señales viales para mejorar la movilidad.",
          start_date: "2024-08-10",
          end_date: "2024-12-10"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3695, 5.538] },
        properties: {
          title: "Reparación de techos escolares",
          cluster: false,
          venue: "Colegio San Pedro",
          event_count: 15,
          image: "https://via.placeholder.com/150",
          description: "Reparación de techos en colegios afectados por lluvias.",
          start_date: "2024-09-15",
          end_date: "2025-01-20"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3605, 5.540] },
        properties: {
          title: "Construcción de canchas deportivas",
          cluster: false,
          venue: "Barrio San Juan",
          event_count: 8,
          image: "https://via.placeholder.com/150",
          description: "Construcción de canchas deportivas en espacios públicos.",
          start_date: "2024-10-20",
          end_date: "2025-01-30"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3615, 5.535] },
        properties: {
          title: "Reparación de sistemas de drenaje",
          cluster: false,
          venue: "Barrio La Esperanza",
          event_count: 16,
          image: "https://via.placeholder.com/150",
          description: "Reparación de sistemas de drenaje para evitar inundaciones.",
          start_date: "2024-11-25",
          end_date: "2025-01-31"
        }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3625, 5.539] },
        properties: {
          title: "Construcción de ciclorrutas adicionales",
          cluster: false,
          venue: "Avenida Occidental",
          event_count: 20,
          image: "https://via.placeholder.com/150",
          description: "Ampliación de la red de ciclorrutas en la ciudad.",
          start_date: "2024-12-05",
          end_date: "2025-01-31"
        }
      }
    ]
  });
}
