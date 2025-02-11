import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3623, 5.538] },
        properties: {
          title: "Plaza Central de Tunja",
          cluster: false,
          venue: "plaza-central",
          event_count: 15,
          image: "/images/plaza-central.jpg",
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
      },
    ],
  });
}
