import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BigScreen.css';

const BigScreen = () => {
    return (
        <div className="home-bg">
            <Container style={{ height: '100%' }}>
                <div className="centered-box">
                    <h1>Find free food at UT!</h1>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/feed"><Button>Find</Button></Link>
                </div>
            </Container>
        </div>
    );
};

export default BigScreen;