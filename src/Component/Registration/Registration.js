import React, { useState } from 'react';
import { Alert, FloatingLabel, Form, Spinner, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Row>
            <Col xs={12} md={6}>
                <h1 className='text-center mt-5'>Register</h1>
                {!isLoading && <Form onSubmit={handleLoginSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3 w-75 mx-auto mt-5"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            name="name"
                            onBlur={handleOnBlur} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 w-75 mx-auto"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-75 mx-auto">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3 w-75 mx-auto">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            onBlur={handleOnBlur}
                        />
                    </FloatingLabel>

                    <div className='form-group text-center'>
                        <Button type='submit' variant="primary" size="lg">Register</Button>
                        <Link to="/login" className='text-decoration-none d-block fs-5 mt-2 mb-5 text-center'>Already Register? Please Login</Link>
                    </div>

                </Form>}
                {isLoading && <Spinner animation="grow" variant="danger" />}
                {user?.email && <Alert severity="success" className='w-50 mx-auto'>User Created successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Col>
            <Col xs={12} md={6}>
            <img  style={{width: "100%"}} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg' alt="" />
            </Col>
            </Row>
        </Container>
        
    );
};

export default Registration;