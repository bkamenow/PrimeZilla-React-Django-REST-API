import { useState } from "react";
import { deleteShop } from "../../../services/shopService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteShop({ shopId, shopName, onClose, onDelete }) {
    const [show, setShow] = useState(true);

    const handleDelete = async () => {
        try {
            await deleteShop(shopId);
            onDelete();
            onClose();
        } catch (error) {
            console.error("Error deleting shop:", error.message);
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
