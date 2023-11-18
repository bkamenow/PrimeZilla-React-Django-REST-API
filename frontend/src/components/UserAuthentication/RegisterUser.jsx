import React, { useState, useEffect } from "react";
import axios from "../../services/axiosConfig";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function RegisterUser({ onClose }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleFormClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={handleFormClick}>
                <div className='form-header'>
                    <h3>Register</h3>
                </div>
                <Form onSubmit={(e) => submitRegistration(e)}>
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
