import React, { useState, useEffect } from "react";

import CloseButton from "react-bootstrap/CloseButton";
import { getAll, getItemDetails, remove } from "../../services/cartService";
import "./Cart.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const data = await getAll(accessToken);
                const detailedItems = await Promise.all(
                    data.map((item) =>
                        getItemDetails(item.item, item.quantity, accessToken)
                    )
                );

                setCartItems(detailedItems);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCartItems();
    }, [setCartItems]);

    useEffect(() => {
        // Calculate the total price whenever the cart items or their quantities change
        const total = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        setTotalPrice(total);
    }, [cartItems]);

    const handleQuantityChange = (itemId, newQuantity) => {
        // Update the quantity of the item in the cartItems state
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await remove(itemId, accessToken);
            setCartItems((prevCartItems) =>
                prevCartItems.filter((item) => item.id !== itemId)
            );
        } catch (error) {
            console.error(error);
        }
    };

    const calculateTotal = (items) => {
        return items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className='header-container cart-main'>
            <div className='header-overlay'>
                <section className='h-100'>
                    <div className='container h-100 py-5'>
                        <div className='row d-flex justify-content-center align-items-center h-100'>
                            <div className='col-10'>
                                {cartItems.length === 0 ? (
                                    <div className='text-center empty-text'>
                                        <h3>Your cart is empty!</h3>
                                    </div>
                                ) : (
                                    <>
                                        <div className='d-flex justify-content-between align-items-center mb-4'>
                                            <h3 className='fw-normal mb-0 text-black'>
                                                Shopping Cart
                                            </h3>
                                        </div>
                                        {cartItems.map((item) => (
                                            <div
                                                className='card rounded-3 mb-4'
                                                key={item.id}
                                            >
                                                <div className='card-body p-4'>
                                                    <div className='row d-flex justify-content-between align-items-center'>
                                                        <div className='col-md-2 col-lg-2 col-xl-2'>
                                                            <img
                                                                src={
                                                                    item.image_url
                                                                }
                                                                className='img-fluid rounded-3'
                                                                alt='image'
                                                            />
                                                        </div>
                                                        <div className='col-md-3 col-lg-3 col-xl-3'>
                                                            <p className='lead fw-normal mb-2'>
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                        <div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
                                                            <button
                                                                className='btn btn-link px-2'
                                                                onClick={() =>
                                                                    handleQuantityChange(
                                                                        item.id,
                                                                        Math.max(
                                                                            item.quantity -
                                                                                1,
                                                                            0
                                                                        )
                                                                    )
                                                                }
                                                            >
                                                                <i className='fas fa-minus'></i>
                                                            </button>

                                                            <input
                                                                id='form1'
                                                                min='0'
                                                                name='quantity'
                                                                defaultValue={
                                                                    item.quantity
                                                                }
                                                                type='number'
                                                                className='form-control form-control-sm'
                                                                onChange={(e) =>
                                                                    handleQuantityChange(
                                                                        item.id,
                                                                        parseInt(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                            10
                                                                        )
                                                                    )
                                                                }
                                                            />

                                                            <button
                                                                className='btn btn-link px-2'
                                                                onClick={() =>
                                                                    handleQuantityChange(
                                                                        item.id,
                                                                        item.quantity +
                                                                            1
                                                                    )
                                                                }
                                                            >
                                                                <i className='fas fa-plus'></i>
                                                            </button>
                                                        </div>

                                                        <div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
                                                            <h5 className='mb-0'>
                                                                $
                                                                {item.price *
                                                                    item.quantity}
                                                            </h5>
                                                        </div>
                                                        <CloseButton
                                                            className='closebtn'
                                                            onClick={() =>
                                                                handleRemoveItem(
                                                                    item.id
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className='card card-total'>
                                            <div className='card-body cart-pay-total'>
                                                <button
                                                    type='button'
                                                    className='btn btn-warning btn-block btn-lg'
                                                >
                                                    Proceed to Pay
                                                </button>
                                                <h3 className='total-price'>
                                                    Total: ${totalPrice}
                                                </h3>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
