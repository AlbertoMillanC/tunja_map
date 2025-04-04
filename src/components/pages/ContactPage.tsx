'use client';

import { useState } from 'react';

export function ContactPage() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { text: inputMessage, isUser: true }]);
    setInputMessage('');

    // Simular respuesta del bot
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Gracias por tu mensaje. Un representante se pondrá en contacto contigo pronto.',
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] p-4">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 bg-gray-800">
          <h1 className="text-xl font-bold text-white">Contacto</h1>
        </div>

        <div className="h-[60vh] flex flex-col">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
