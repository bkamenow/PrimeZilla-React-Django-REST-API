import { useState, useContext, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../../context/AuthContext";

export default function LoginUser({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let { loginUser, authTokens } = useContext(AuthContext);

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        await loginUser(e, email, password);
    };

    useEffect(() => {
        if (authTokens) {
            onClose();
        }
    }, [authTokens]);

    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={handleFormClick}>
                <div className='form-header'>
                    <h3>Login</h3>
                </div>
                <Form onSubmit={handleLoginSubmit}>
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
