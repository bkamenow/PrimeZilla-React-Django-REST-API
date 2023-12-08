import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Items.css";
import useForm from "../../hooks/useForm";
import * as itemService from "../../services/itemService";

export default function EditItem({ onClose, itemId }) {
    const [item, setItem] = useState({
        name: "",
        image_url: "",
        description: "",
        price: "",
    });

    useEffect(() => {
        itemService
            .getOneItem(itemId)
            .then((response) => {
                setItem(response);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error.message);
            });
    }, [itemId]);

    const editItemSubmitHandler = async (values) => {
        try {
            await itemService.editItem(itemId, values);
            onClose();
            onItemUpdate();
        } catch (err) {
            console.log(err);
        }
    };

    const { values, onChange, onSubmit } = useForm(editItemSubmitHandler, item);

    return (
        <div className='overlay' onClick={onClose}>
            <div className='form-box' onClick={(e) => e.stopPropagation()}>
                <div className='form-header'>
                    <h3 className='edit-item-h3'>Edit Item</h3>
                </div>
                <Form onSubmit={onSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Image URL'
                            name='image_url'
                            value={values.image_url}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Description'
                            name='description'
                            value={values.description}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Price'
                            name='price'
                            value={values.price}
                            onChange={onChange}
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
