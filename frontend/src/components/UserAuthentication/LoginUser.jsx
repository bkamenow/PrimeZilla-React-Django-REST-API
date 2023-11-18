import React, { useState, useEffect } from "react";
import axios from "../../services/axiosConfig";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export default function LoginUser({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // If a token is present, set the user as authenticated
            setCurrentUser(true);
        }
    }, []);

    function submitLogin(e) {
        e.preventDefault();
        client
            .post("/api/accounts/login", { email, password })
            .then(storeTokenAndSetUser);
    }

    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={handleFormClick}>
                <div className='form-header'>
                    <h3>Login</h3>
                </div>
                <Form onSubmit={(e) => submitLogin(e)}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className='form-btns'>
                        <Button variant='dark' type='submit'>
                            Submit
                        </Button>
                        <Button variant='dark' type='button' onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
