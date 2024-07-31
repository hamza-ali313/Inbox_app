import React from 'react'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={3} md={3} sm={3}>
                        <ChatList />
                    </Col>
                    <Col lg={8} md={8} sm={8} className=''>
                        <ChatWindow />
                        <MessageInput />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home