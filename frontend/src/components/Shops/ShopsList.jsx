import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShopsList() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            const response = await axios.get("/api/shops/");
            setShops(response.data);
        };

        fetchShops();
    }, []);

    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container'>
                {shops.map((shop) => (
                    <Card style={{ width: "18rem" }} key={shop.id}>
                        <Card.Img variant='top' src='images/game.png' />
                        <Card.Body>
                            <Card.Title>{shop.name}</Card.Title>
                            <Card.Text>
                                <h5>{shop.type}</h5>
                                <p>{shop.description}</p>
                            </Card.Text>
                            <Button variant='primary'>View Shop</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
