import React from 'react';
import { Container } from 'react-bootstrap';
import SigninForm from '../components/signin/SigninForm';

const SigninPage = () => {
    return (
        <div className="home-bg">
            <Container style={{ height: '100%' }}>
                <SigninForm />
            </Container>
        </div>
    );
};

export default SigninPage;