import React, { useState, useEffect } from "react";

import useForm from "../../hooks/useForm";
import * as userService from "../../services/userService";
import "./EditUser.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditUser({ userId, onClose }) {
    const [user, setUser] = useState({
        email: "",
        username: "",
    });

    useEffect(() => {
        userService
            .getOne(userId)
            .then((response) => {
                const userData = response[userId];
                if (userData) {
                    setUser(userData);
                } else {
                    console.error("User not found for userId:", userId);
                }
            })
            .catch((error) => {
                console.error("Error fetching user details:", error.message);
            });
    }, [userId]);

    const editUserSubmitHandler = async (values) => {
        try {
            await userService.edit(userId, values);

            onClose();
        } catch (err) {
            console.error("Error updating user details:", err.message);
        }
    };

    const { values, onChange, onSubmit } = useForm(editUserSubmitHandler, user);

    return (
        <div className='overlay' onClick={onClose}>
            <div
                className='form-box edit-from-box'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='form-header'>
                    <h3>Edit</h3>
                </div>

                <Form onSubmit={onSubmit}>
                    <Form.Group controlId='formEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            value={values.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type='username'
                            name='username'
                            value={values.username}
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Button variant='dark' type='submit'>
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
}
