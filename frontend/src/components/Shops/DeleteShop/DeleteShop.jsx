import { useState } from "react";
import { deleteShop } from "../../../services/shopService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export default function DeleteShop({ shopId, shopName, onClose }) {
    const show = useState(true);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteShop(shopId);
            navigate("/your-shops");
            onClose();
        } catch (error) {
            console.error("Error deleting user:", error.message);
        }
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Shop</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete {shopName} shop?
            </Modal.Body>
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
