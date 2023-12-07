import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createItem } from "../../services/itemService";

export default function CreateItem({ shopId, shopName, onCreate, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        description: "",
        price: 0,
        shop: shopId,
        shop_name: shopName,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createItem(shopId, formData);
            onCreate();
        } catch (error) {
            console.error("Error creating item:", error.message);
        }
    };

    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={(e) => e.stopPropagation()}>
                <div className='form-header'>
                    <h3>Create Item</h3>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formImage'>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type='text'
                            name='image_url'
                            placeholder='Image'
                            value={formData.image_url}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as='textarea'
                            name='description'
                            placeholder='Description'
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formPrice'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='number'
                            name='price'
                            placeholder='Price'
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className='form-btns'>
                        <Button variant='dark' type='submit'>
                            Create
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
