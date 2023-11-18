import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CreateShop({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        type: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/shops/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    image_url: formData.image_url, // Ensure this field matches your Django model
                    type: formData.type,
                    description: formData.description,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Parse the error response
                console.error("Error creating shop:", errorData);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Assuming the response contains the created shop data
            const createdShop = await response.json();
            console.log("Shop created:", createdShop);

            // Optionally, you can perform additional actions, such as closing the modal
            onClose();
        } catch (error) {
            console.error("General error creating shop:", error.message);
        }
    };

    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={(e) => e.stopPropagation()}>
                <div className='form-header'>
                    <h3>Create Shop</h3>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Image URL'
                            name='image_url'
                            value={formData.image_url}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Type'
                            name='type'
                            value={formData.type}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Description'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
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
