import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { registerUser } from "../../services/authService";

export default function RegisterUser({ onClose }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitRegistration = async (e) => {
        e.preventDefault();

        try {
            await registerUser(email, username, password);
            onClose();
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleFormClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={handleFormClick}>
                <div className='form-header'>
                    <h3>Register</h3>
                </div>
                <Form onSubmit={submitRegistration}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
