import { Input } from '@mui/material';
import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Category from '../custom/category/Category';
import './SigninForm.css';

const SigninForm = () => {
    return (
        <div className="centered-box">
            <Col md={6} className="signin-form">
                <Category title="Sign in" />
                <Input className="signin-input" placeholder="Account name" />
                <Input type="password" className="signin-input" placeholder="Password" />
                <Button style={{marginTop: 20}}>Sign in</Button>
            </Col>
        </div>
    );
};

export default SigninForm;