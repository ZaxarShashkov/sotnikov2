import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import img from '../img/welcome.jpg'

const WelcomePage = () => {
    return (
        <Container style={{ overflow: 'hidden', height: '100vh' }}>
            <Card.Img src={img} alt="Card image" style={{ marginTop: '-6rem', overflow: 'hidden' }} />
        </Container >
    )
}

export default WelcomePage