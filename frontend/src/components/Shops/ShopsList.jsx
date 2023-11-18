import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShopsList() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/shops/")
            .then((response) => {
                setShops(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container'>
                {shops.map((shop) => (
                    <Card style={{ width: "18rem" }} key={shop.id}>
                        <Card.Img
                            variant='top'
                            src={shop.image_url}
                            alt={shop.name}
                        />
                        <Card.Body>
                            <Card.Title>{shop.name}</Card.Title>
                            <Card.Text>
                                <h6>{shop.type}</h6>
                                {shop.description}
                            </Card.Text>
                            <Button variant='primary'>View Shop</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
