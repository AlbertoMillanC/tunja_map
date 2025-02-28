import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    type: "FeatureCollection",
    features: [
      // Group 1
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3600, 5.530] },
        properties: {
          title: "Inauguración de la ampliación del polideportivo de Runta1",
          cluster: false,
          venue: "Runta, Tunja",
          event_count: 1,
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Falcaldiadetunja%2Fp%2FDGUCvqSx7pY%2F&psig=AOvVaw00rL4P7xsAWb632u6StRou&ust=1740259044985000&source=images&cd=vfe&opi=89978449&ved=0CBcQjRxqFwoTCJC9m6PY1YsDFQAAAAAdAAAAABAE"
        }
      },
      // Group 2
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3605, 5.541] },
        properties: {
          title: "Actualización de estudios y diseños para el polideportivo de Runta1",
          cluster: false,
          venue: "Runta, Tunja",
          event_count: 1,
          start_date: "2024",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Falcaldiadetunja%2Fp%2FDGUCvqSx7pY%2F&psig=AOvVaw00rL4P7xsAWb632u6StRou&ust=1740259044985000&source=images&cd=vfe&opi=89978449&ved=0CBcQjRxqFwoTCJC9m6PY1YsDFQAAAAAdAAAAABAE"
        }
      },
      // Group 3
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3610, 5.542] },
        properties: {
          title: "Construcción y ampliación de la I.E. en Runta",
          cluster: false,
          venue: "Runta, Tunja",
          event_count: 1,
          image: "https://via.placeholder.com/150?text=Construcci%C3%B3n+I.E.+Runta"
        }
      },
      // Group 4
      {
        type: "Feature",

        geometry: { type: "Point", coordinates: [-73.3615, 5.543] },
        properties: {
          title: "¡A Tunja la construimos entre todos! (compromiso ciudadano)3",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          start_date: "Noviembre 2024",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Falcaldiadetunja%2Fp%2FDGUCvqSx7pY%2F&psig=AOvVaw00rL4P7xsAWb632u6StRou&ust=1740259044985000&source=images&cd=vfe&opi=89978449&ved=0CBcQjRxqFwoTCJC9m6PY1YsDFQAAAAAdAAAAABAE"
        }
      },
      // Group 5
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3620, 5.544] },
        properties: {
          title: "Cabalgata por las calles de Tunja",
          cluster: false,
          venue: "Centro histórico de Tunja",
          event_count: 1,
          start_date: "Octubre 2023",
          image: "https://via.placeholder.com/150?text=Cabalgata+Tunja"
        }
      },
      // Group 6
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3625, 5.545] },
        properties: {
          title: "Actividades culturales compartidas en Instagram",
          cluster: false,
          venue: "Palacio de la Alcaldía, Tunja",
          event_count: 1,
          start_date: "Noviembre 2024",
          image: "https://via.placeholder.com/150?text=Actividades+Instagram"
        }
      },
      // Group 7
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3630, 5.546] },
        properties: {
          title: "Evento de compromiso ciudadano",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          start_date: "Noviembre 2024",
          image: "https://via.placeholder.com/150?text=Compromiso+ciudadano"
        }
      },
      // Group 8
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3635, 5.547] },
        properties: {
          title: "Participación en el Festival Internacional de la Cultura Campesina",
          cluster: false,
          venue: "Varios puntos de Tunja",
          event_count: 1,
          start_date: "2024",
          image: "https://via.placeholder.com/150?text=Festival+Cultural+Campesina"
        }
      },
      // Group 9
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3640, 5.548] },
        properties: {
          title: "Semana del Medio Ambiente 2024",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          start_date: "Octubre 2024",
          image: "https://via.placeholder.com/150?text=Semana+Medio+Ambiente"
        }
      },
      // Group 10
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3645, 5.549] },
        properties: {
          title: "Charlas, talleres y concursos en la Alcaldía",
          cluster: false,
          venue: "Alcaldía de Tunja",
          event_count: 1,
          start_date: "Octubre 2024",
          image: "https://via.placeholder.com/150?text=Charlas+en+Alcald%C3%ADa"
        }
      },
      // Group 11
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3650, 5.550] },
        properties: {
          title: "Construcción del Centro de Ciencia y Tecnología9",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          image: "https://via.placeholder.com/150?text=Centro+de+Ciencia+Tecnolog%C3%ADa"
        }
      },
      // Group 12
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3655, 5.551] },
        properties: {
          title: "Actividades académicas fin de año",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          start_date: "Diciembre 2024",
          image: "https://via.placeholder.com/150?text=Actividades+acad%C3%A9micas"
        }
      },
      // Group 13
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3660, 5.552] },
        properties: {
          title: "Aguinaldo Boyacense 2024",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          start_date: "Diciembre 2024",
          image: "https://via.placeholder.com/150?text=Aguinaldo+Boyacense"
        }
      },
      // Group 14 - updated: replace "Gobernación" with "Alcaldía"
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3665, 5.553] },
        properties: {
          title: "Proyectos priorizados con la Alcaldía de Boyacá1",
          cluster: false,
          venue: "Tunja",
          event_count: 1,
          start_date: "Febrero 2024",
          image: "https://via.placeholder.com/150?text=Proyectos+Alcald%C3%ADa+Boyac%C3%A1"
        }
      },
      // Group 15
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-73.3670, 5.554] },
        properties: {
          title: "Mejoramiento de infraestructura vial",
          cluster: false,
          venue: "Vías urbanas de Tunja",
          event_count: 1,
          image: "https://via.placeholder.com/150?text=Infraestructura+vial"
        }
      }
    ]
  });
}
