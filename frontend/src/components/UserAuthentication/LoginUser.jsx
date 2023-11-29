import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginUser } from "../../services/authService";

export default function LoginUser({ onClose, onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    function submitLogin(e) {
        e.preventDefault();
        loginUser(email, password)
            .then((response) => {
                const { token, user_id } = response;

                localStorage.setItem("token", token);
                localStorage.setItem("userId", user_id);

                onLogin();
                onClose();
            })
            .catch((error) => {
                console.error("Login error:", error.message);
            });
    }

    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={handleFormClick}>
                <div className='form-header'>
                    <h3>Login</h3>
                </div>
                <Form onSubmit={submitLogin}>
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
