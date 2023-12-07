import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import { getAll, getItemDetails } from "../../services/cartService";
import "./Cart.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const data = await getAll(accessToken);
                const detailedItems = await Promise.all(
                    data.map((item) => getItemDetails(item.item, accessToken))
                );

                setCartItems(detailedItems);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <div className='header-container cart-main'>
            <div className='header-overlay'>
                <div className='cart-scroll-container'>
                    <ListGroup className='cart-container' id='cart'>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.id}>
                                <div className='cart-item-info'>
                                    <div className='cart-item-image'>
                                        <img src={item.image_url} alt='img' />
                                    </div>
                                    <div className='cart-item-name'>
                                        {item.name}
                                    </div>
                                    <div className='cart-item-quantity'>
                                        {item.quantity}
                                    </div>
                                    <div className='cart-item-price'>
                                        {item.price}$
                                    </div>
                                </div>
                                <CloseButton />
                            </ListGroup.Item>
                        ))}

                        <ListGroup.Item className='cart-total'>
                            <Button variant='success'>Buy</Button>
                            <p>Total: {calculateTotal(cartItems)}$</p>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
}

const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
};
