import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Aquí puedes agregar la lógica para enviar el correo electrónico
    // Por ejemplo, usando nodemailer o un servicio de correo

    // Por ahora, solo simularemos una respuesta exitosa
    console.log('Datos del formulario recibidos:', {
      name,
      email,
      phone,
      message
    });

    // Simular un pequeño retraso para mostrar el estado de carga
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
} 