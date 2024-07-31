import { useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const MessageInput = ({ threadId }) => {
    const [message, setMessage] = useState('');

    const handleSend = async () => {
        if (message.trim()) {
            await axios.post('/api/sendMessage', { threadId, message });
            setMessage('');
        }
    };

    return (
        <div className="message-input">
            <Row>
                <Col lg={10} md={10} sm={10}>
                    <textarea
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                    ></textarea >
                </Col>
                <Col lg={2} md={2} sm={2} >
                    <button onClick={handleSend}>Send</button>
                </Col>
            </Row>
        </div>
    );
};

export default MessageInput;
