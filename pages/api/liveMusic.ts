import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  type: string;
  features: Array<{
    type: string;
    properties: {
      id: string;
      title: string;
      description: string;
      status: string;
      venue: string;
      location: string;
      start_date: string;
      image: string;
    };
    geometry: {
      type: string;
      coordinates: [number, number];
    };
  }>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: "1",
          title: "Pavimentación Calle 19",
          description: "Pavimentación y mejoramiento de la Calle 19 entre Carrera 10 y Carrera 15, incluyendo instalación de alcantarillado y aceras.",
          status: "En ejecución",
          venue: "Centro Histórico",
          location: "Calle 19 entre Carrera 10 y 15",
          start_date: "2024-03-15",
          image: "https://i.imgur.com/8XZqY3N.jpg"
        },
        geometry: {
          type: "Point",
          coordinates: [-73.3614, 5.5353]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "2",
          title: "Pavimentación Avenida Oriental",
          description: "Pavimentación y modernización de la Avenida Oriental, incluyendo ciclo-rutas y mejoramiento del espacio público.",
          status: "Planificado",
          venue: "Norte de Tunja",
          location: "Avenida Oriental entre Calle 45 y 55",
          start_date: "2024-04-01",
          image: "https://pbs.twimg.com/media/Gl4Iwq7WcAA_o_j?format=jpg&name=large"
        },
        geometry: {
          type: "Point",
          coordinates: [-73.3556, 5.5456]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "3",
          title: "Pavimentación Barrio San Francisco",
          description: "Pavimentación de vías principales del barrio San Francisco, incluyendo instalación de redes de agua potable y alcantarillado.",
          status: "En ejecución",
          venue: "Barrio San Francisco",
          location: "Vías principales del barrio San Francisco",
          start_date: "2024-02-20",
          image: "https://pbs.twimg.com/media/GmBxiYEXkAAApCf?format=jpg&name=large"
        },
        geometry: {
          type: "Point",
          coordinates: [-73.3689, 5.5289]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "4",
          title: "Pavimentación Carrera 11",
          description: "Pavimentación y mejoramiento de la Carrera 11 entre Calle 15 y Calle 25, incluyendo instalación de semáforos y señalización.",
          status: "Planificado",
          venue: "Centro",
          location: "Carrera 11 entre Calle 15 y 25",
          start_date: "2024-05-01",
          image: "https://pbs.twimg.com/media/GnN6COFW4AAnf82?format=jpg&name=medium"
        },
        geometry: {
          type: "Point",
          coordinates: [-73.3633, 5.5389]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "5",
          title: "Pavimentación Barrio La María",
          description: "Pavimentación de vías secundarias del barrio La María, incluyendo instalación de redes de agua potable y alcantarillado.",
          status: "En ejecución",
          venue: "Construccion Techo polideportivo",
          location: "Vías secundarias del barrio La María",
          start_date: "2024-03-01",
          image: "https://pbs.twimg.com/media/GnYvie1XoAIDpJM?format=jpg&name=large"
        },
        geometry: {
          type: "Point",
          coordinates: [-73.3711, 5.5211]
        }
      }
    ]
  });
}