import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

import Layout from "../layout";

const Login = () => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const send = event => {
        event.preventDefault();

        const form = new FormData();
        form.append('email', login);
        form.append('password', password);

        fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${login}&password=${password}`
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('error while logging in')
                }

                console.log(res)
            })
            .catch(e => console.log(e));

        setLogin('');
        setPassword('');
    };

    return (
            <Container fluid>
                <Form className="p-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={login}
                                      onChange={event => setLogin(event.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" value={password}
                                      onChange={event => setPassword(event.target.value)}/>
                    </Form.Group>
                    <Button className="float-right ml-2" variant="primary" onClick={event => send(event)}>
                        Sign In
                    </Button>
                    <Button className="float-right" variant="outline-primary" onSubmit={event => send(event)}>
                        Sign Up
                    </Button>
                </Form>
            </Container>
    )
};

export default Login;
