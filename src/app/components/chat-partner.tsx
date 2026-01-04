'use client';

import { useState } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatPartner({ unitId }: { unitId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: Message = { sender: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Call the API endpoint
      const response = await fetch('/api/ai-partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentMessage: input,
          unitNumber: parseInt(unitId),
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const aiMessage: Message = { sender: 'ai', text: data.aiResponse };
      setMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        sender: 'ai',
        text: 'Prepáč, mám technický problém. Skús to prosím znova.',
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-lg">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-8">
            <p>Ahoj! Som tvoj AI partner pre konverzáciu. Som pripravený precvičiť si s tebou Lekciu {unitId}. Čom sa chceš rozprávať?</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 rounded-lg px-4 py-2 text-gray-800">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Napíšte správu..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:border-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition"
        >
          {isLoading ? '...' : '→'}
        </button>
      </div>
    </div>
  );
}
