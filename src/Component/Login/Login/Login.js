import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { isLoading, loginUser, authError, user, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    
    return (
        <Container>
  <Row>
    <Col xs={12} md={6}>
            <h1 className='text-center mt-5'>Log In</h1>
            {!isLoading && <Form onSubmit={handleLoginSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-75 mx-auto mt-5"
                >
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        onBlur={handleOnChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-75 mx-auto">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onBlur={handleOnChange} />
                </FloatingLabel>
                <div className='form-group text-center'>
                    <Button className='text-center' type='submit' variant="primary" size="lg">Login</Button>
                    <Link to="/register" className='text-decoration-none d-block fs-5 mt-2 text-center'>New User? Please Register</Link>
                    <Button onClick={handleGoogleSignIn} className='mt-4' variant="primary" size="lg"><i className="fab fa-google"></i> Google Sign In</Button>

                </div>
            </Form>}
            {isLoading && <Spinner animation="grow" variant="danger" />}
            {user?.email && <Alert severity="success" className='mt-4 w-50 mx-auto'>Login successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        
    </Col>
    <Col xs={12} md={6}>
    <img  style={{width: "100%"}} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg' alt="" />
    </Col>
  </Row>
  </Container>
        
    );
};

export default Login;