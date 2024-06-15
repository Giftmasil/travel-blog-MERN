// src/components/Chatbot/Chatbot.jsx
/* import React, { useState } from 'react'; */
/* import { Client } from '@gradio/client'; */
import './chatbot.css';

const Chatbot = () => {
  /* const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [client, setClient] = useState(null);

  React.useEffect(() => {
    const initializeClient = async () => {
      try {
        const newClient = await Client.connect('xfince/wildlife-chatbot');
        setClient(newClient);
      } catch (error) {
        console.error('Error initializing Gradio client:', error);
      }
    };

    initializeClient();
  }, []);

  const handleSend = async () => {
    if (input.trim() === '' || !client) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await client.predict('/chat', {
        message: input,
        system_message: 'You are a friendly Chatbot.',
        max_tokens: 512,
        temperature: 0.7,
        top_p: 0.95,
      });

      const botMessage = { sender: 'bot', text: response.data[0] };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with chatbot API:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}; */

return (
  <div className="Chatbot">
    <a href="https://xfince-wildlife-chatbot.hf.space/"><i class="fa-solid fa-robot"></i></a>
  </div>
)
}

export default Chatbot;
