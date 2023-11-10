import React from "react";
import { useState, useEffect } from "react";

import axios from "../services/axiosConfig";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

const handleFormClick = (e) => {
    e.stopPropagation();
};

export default function UserAuthentication({
    onClose,
    onUserLogin,
    onUserRegister,
}) {
    const [currentUser, setCurrentUser] = useState();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        client
            .get("/api/user")
            .then(function (res) {
                setCurrentUser(true);
            })
            .catch(function (error) {
                setCurrentUser(false);
            });
    }, []);

    function submitRegistration(e) {
        e.preventDefault();
        client
            .post("/api/register", {
                email: email,
                username: username,
                password: password,
            })
            .then(function (res) {
                client
                    .post("/api/login", {
                        email: email,
                        password: password,
                    })
                    .then(function (res) {
                        setCurrentUser(true);
                    });
            });
    }

    function submitLogin(e) {
        e.preventDefault();
        client
            .post("/api/login", {
                email: email,
                password: password,
            })
            .then(function (res) {
                setCurrentUser(true);
            });
    }

    function submitLogout(e) {
        e.preventDefault();
        client
            .post("/api/logout", { withCredentials: true })
            .then(function (res) {
                setCurrentUser(false);
            });
    }

    if (currentUser) {
        return (
            <div>
                <form onSubmit={(e) => submitLogout(e)}>
                    <Button type='submit' variant='light'>
                        Log out
                    </Button>
                </form>

                <div className='center'>
                    <h2>You're logged in!</h2>
                </div>
            </div>
        );
    }
    return (
        <div>
            {onUserRegister ? (
                <div className='overlay' onClick={onClose}>
                    <div className='form-box' onClick={handleFormClick}>
                        <div className='form-header'>
                            <h3>Register</h3>
                        </div>
                        <Form onSubmit={(e) => submitRegistration(e)}>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicEmail'
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicUsername'
                            >
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter username'
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicPassword'
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                            <Button
                                variant='primary'
                                type='button'
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </Form>
                    </div>
                </div>
            ) : (
                <div className='overlay' onClick={onClose}>
                    <div className='form-box' onClick={handleFormClick}>
                        <div className='form-header'>
                            <h3>Login</h3>
                        </div>
                        <Form onSubmit={(e) => submitLogin(e)}>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicEmail'
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicPassword'
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                            <Button
                                variant='primary'
                                type='button'
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </Form>
                    </div>
                </div>
            )}
        </div>
    );
}
