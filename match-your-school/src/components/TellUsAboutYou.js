import React, { useState, useEffect } from "react";
import axios from 'axios';
import './TellUsAboutYou.css';

function TellUsAboutYou() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [typingText, setTypingText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Add typing effect
    useEffect(() => {
        if (isTyping && typingText) {
            const timeoutId = setTimeout(() => {
                setMessages(prev => {
                    const newMessages = [...prev];
                    if (newMessages.length) {
                        newMessages[newMessages.length - 1].content = typingText;
                    }
                    return newMessages;
                });
                setIsTyping(false);
                setIsLoading(false);
            }, 50 * typingText.length); // Adjust typing speed here
            
            return () => clearTimeout(timeoutId);
        }
    }, [isTyping, typingText]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { role: 'user', content: input }]);
        setIsLoading(true);
        setInput('');

        try {
            const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant that provides information about studying in Australia. Keep your responses under 200 characters."
                    },
                    ...messages,
                    { role: "user", content: input }
                ]
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            // Get AI response and truncate if necessary
            let aiResponse = response.data.choices[0].message.content;
            if (aiResponse.length > 200) {
                aiResponse = aiResponse.substring(0, 197) + '...';
            }

            // Add empty message first
            setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
            // Start typing effect
            setTypingText(aiResponse);
            setIsTyping(true);

        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: 'Sorry, I encountered an error. Please try again.' 
            }]);
            setIsLoading(false);
        }
    };

    return (
        <div className="tellus-page">
            <div className="chat-container">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} 
                             className={`message ${message.role === 'user' ? 'user' : 'ai'}`}>
                            {message.content}
                        </div>
                    ))}
                    {isLoading && <div className="loading">AI is thinking...</div>}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about studying in Australia..."
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TellUsAboutYou;