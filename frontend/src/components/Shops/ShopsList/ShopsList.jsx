import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { getAllShops } from "../../../services/shopService";

import "./ShopsList.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ShopsList() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllShops();
                setShops(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [setShops]);

    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container items'>
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
                                <b>{shop.type}</b>
                                <br />
                                {shop.description}
                            </Card.Text>
                            {shop.items && shop.items.length > 0 ? (
                                <Button
                                    variant='dark'
                                    as={Link}
                                    to={`/items/${shop.id}`}
                                >
                                    View Shop
                                </Button>
                            ) : (
                                <Button variant='dark'>Coming Soon</Button>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
