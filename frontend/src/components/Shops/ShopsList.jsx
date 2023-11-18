import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { getAllShops } from "../../services/shopService";

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
