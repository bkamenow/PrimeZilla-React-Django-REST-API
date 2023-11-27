import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { createShop } from "../../services/shopService";

export default function CreateShop({ onClose, onCreate }) {
    const navigate = useNavigate();
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
        await createShop(formData);
        navigate("/your-shops");
        onCreate();
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
