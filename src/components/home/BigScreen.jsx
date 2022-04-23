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
                    <Button><Link style={{ color: 'white', textDecoration: 'none' }} to="/feed">Find</Link></Button>
                </div>
            </Container>
        </div>
    );
};

export default BigScreen;