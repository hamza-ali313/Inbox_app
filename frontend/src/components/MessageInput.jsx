import { useState } from 'react';
// import axios from 'axios';
// import { api } from '../../config';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/messageSlice';
import { Col, Row } from 'react-bootstrap';

const MessageInput = ({ threadId }) => {
    // const [message, setMessage] = useState('');

    // const handleSend = async () => {
    //     if (message.trim()) {
    //         // await axios.post(`/${api}/sendMessage`, { threadId, message });
    //         await axios.post(`/${api}/sendmessage`, {message});
    //         setMessage('');
    //     }
    // };
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            dispatch(sendMessage(message));
            setMessage('');
        }
    };
    return (
        <div className="message-input">
            <form onSubmit={handleSend}>
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
                        <button type='submit'>Send</button>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default MessageInput;
