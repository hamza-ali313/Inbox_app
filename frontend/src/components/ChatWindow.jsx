import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { api, dummmymessages } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messageSlice';

const ChatWindow = ({ threadId }) => {
    // const [messages, setMessages] = useState(dummmymessages);

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         let  {data}  = await axios.get(`http://localhost:3000/api/messages`);
    //         setMessages(data);
    //         console.log(data)
    //     }
    //     fetchMessages();
    // });
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages.messages);
    const status = useSelector((state) => state.messages.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMessages());
        }
        dispatch(fetchMessages());
    }, [messages]);

    return (
        <div className="chat-window">
            {messages.map((msg, index) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                    <p>{msg.text}</p>
                    {/* <small>{new Date(msg.timestamp).toLocaleTimeString()}</small> */}
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;
