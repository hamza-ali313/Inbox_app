import { useEffect, useState } from 'react';
// import axios from 'axios';

const ChatWindow = ({ threadId }) => {
    const [messages, setMessages] = useState([
        {
            text: "Hello! How can I help you today?",
            timestamp: "2024-07-23T09:00:00Z",
            sender: "ai",
        },
        {
            text: "I'm looking for information on your new product.",
            timestamp: "2024-07-23T09:01:00Z",
            sender: "user",
        },
        {
            text: "Sure! Our new product is called XYZ. It offers great features like A, B, and C.",
            timestamp: "2024-07-23T09:02:30Z",
            sender: "ai",
        },
        {
            text: "That sounds interesting! Can you tell me more about feature A?",
            timestamp: "2024-07-23T09:03:15Z",
            sender: "user",
        },
        {
            text: "Feature A allows you to seamlessly integrate with other tools and services.",
            timestamp: "2024-07-23T09:04:45Z",
            sender: "ai",
        },
        {
            text: "Thanks for the information!",
            timestamp: "2024-07-23T09:05:30Z",
            sender: "user",
        },
    ]);

    //   useEffect(() => {
    //     const fetchMessages = async () => {
    //       let { data } = await axios.get(`/api/messages/${threadId}`);
    //       setMessages(data);
    //     };

    //     fetchMessages();
    //   }, [threadId]);

    return (
        <div className="chat-window">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                    <p>{msg.text}</p>
                    {/* <small>{new Date(msg.timestamp).toLocaleTimeString()}</small> */}
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;
