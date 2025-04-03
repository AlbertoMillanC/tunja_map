'use client';

import { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputValue),
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hola') || lowerInput.includes('buenos días') || lowerInput.includes('buenas tardes')) {
      return '¡Hola! ¿En qué puedo ayudarte con respecto a las obras de Tunja?';
    }
    if (lowerInput.includes('obra') || lowerInput.includes('proyecto')) {
      return 'Puedes ver todas las obras en el mapa interactivo en la página principal. ¿Te gustaría saber más sobre alguna obra en específico?';
    }
    if (lowerInput.includes('contacto') || lowerInput.includes('teléfono') || lowerInput.includes('correo')) {
      return 'Puedes contactarnos a través de nuestro correo: contacto@tunjaconecta.gov.co';
    }
    return 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla o ser más específico sobre qué información necesitas de las obras de Tunja?';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">Contacto</h1>
          
          <div className="space-y-4 mb-6 h-96 overflow-y-auto bg-gray-800 p-4 rounded-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
