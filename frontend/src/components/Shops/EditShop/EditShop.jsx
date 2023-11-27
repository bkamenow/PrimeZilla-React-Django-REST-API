import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import useForm from "../../../hooks/useForm";
import * as shopService from "../../../services/shopService";

export default function EditShop({ onClose, shopId }) {
    const [shop, setShop] = useState({
        name: "",
        image_url: "",
        type: "",
        description: "",
    });

    useEffect(() => {
        shopService
            .getOneShop(shopId)
            .then((response) => {
                const shopData = response.data;
                setShop(shopData);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error.message);
            });
    }, [shopId]);

    const editShopSubmitHandler = async (values) => {
        try {
            await shopService.editShop(shopId, values);

            onClose();
        } catch (err) {
            console.log(err);
        }
    };

    const { values, onChange, onSubmit } = useForm(editShopSubmitHandler, shop);

    return (
        <>
            <div className='overlay' onClick={onClose}>
                <div className='form-box' onClick={(e) => e.stopPropagation()}>
                    <div className='form-header'>
                        <h3>Create Shop</h3>
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
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Type'
                                name='type'
                                value={values.type}
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
                        <div className='form-btns'>
                            <Button variant='dark' type='submit'>
                                Submit
                            </Button>
                            <Button
                                variant='dark'
                                type='button'
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
