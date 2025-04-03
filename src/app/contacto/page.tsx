'use client';

import { useState } from 'react';

export default function Contacto() {
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy el asistente virtual de Tunja Conecta. ¿En qué puedo ayudarte?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Simular respuesta del bot
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('obra') || lowerInput.includes('proyecto')) {
        botResponse = 'Para información sobre obras específicas, te recomiendo visitar nuestro mapa interactivo en la página principal. Allí podrás ver todas las obras en curso y su estado actual.';
      } else if (lowerInput.includes('plan') || lowerInput.includes('desarrollo')) {
        botResponse = 'Puedes consultar nuestro Plan de Desarrollo completo en la sección "Plan de Desarrollo". Allí encontrarás todos los detalles sobre nuestros proyectos y metas.';
      } else if (lowerInput.includes('contacto') || lowerInput.includes('teléfono') || lowerInput.includes('correo')) {
        botResponse = 'Puedes contactarnos al correo contacto@tunjaconecta.gov.co o llamar al (8) 123-4567.';
      } else {
        botResponse = 'Entiendo tu consulta. Para mejor atención, ¿podrías especificar si tu pregunta está relacionada con obras en curso, el plan de desarrollo o información de contacto?';
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-primary-600 text-white">
            <h1 className="text-xl font-semibold">Asistente Virtual</h1>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-primary-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
