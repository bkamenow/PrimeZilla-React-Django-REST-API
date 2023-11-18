import React, { useState, useEffect } from "react";
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
        const token = localStorage.getItem("token");
        if (token) {
            setCurrentUser(true);
        }
    }, []);

    function storeTokenAndSetUser(res) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        setCurrentUser(true);
    }

    function submitRegistration(e) {
        e.preventDefault();
        client
            .post("/api/register", {
                email: email,
                username: username,
                password: password,
            })
            .then((res) => {
                client
                    .post("/api/login", { email, password })
                    .then(storeTokenAndSetUser);
            });
    }

    function submitLogin(e) {
        e.preventDefault();
        client
            .post("/api/login", { email, password })
            .then(storeTokenAndSetUser);
    }

    function submitLogout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        client.post("/api/logout", { withCredentials: true }).then(() => {
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
                            <div className='form-btns'>
                                <Button variant='dark' type='submit'>
                                    Submit
                                </Button>
                                <Button
                                    variant='dark'
                                    type='button'
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </div>
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
                            <div className='form-btns'>
                                <Button variant='dark' type='submit'>
                                    Submit
                                </Button>
                                <Button
                                    variant='dark'
                                    type='button'
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </div>
    );
}
