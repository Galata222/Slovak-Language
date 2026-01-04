'use client';

import { useState } from 'react';

export default function AIPartner() {
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, { sender: 'ai', text: `You said: ${input}` }]);
    }, 500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-gray-100 rounded-lg p-4 h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-grow border rounded-l-lg p-2 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          className="bg-blue-500 text-white rounded-r-lg px-4 py-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
