import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { remove } from "../../services/userService";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteUser({ userId, onClose, onDelete }) {
    const show = useState(true);
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            await remove(userId);
            onDelete();
            onClose();
            navigate("/");
        } catch (error) {
            console.error("Error deleting user:", error.message);
        }
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onClose}>
                    Cancel
                </Button>
                <Button variant='danger' onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
