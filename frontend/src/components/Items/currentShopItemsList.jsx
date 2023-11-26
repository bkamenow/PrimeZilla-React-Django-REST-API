import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { getShopItems } from "../../services/shopService";

export default function CurrentShopItemsList() {
    const [shopItems, setShopItems] = useState([]);
    const { shopId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getShopItems(shopId);
                setShopItems(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [shopId]);

    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container'>
                {shopItems.length === 0 ? (
                    <div className='no-items-message'>
                        <h1>There are no items yet!</h1>
                    </div>
                ) : (
                    shopItems.map((item) => (
                        <Card style={{ width: "18rem" }} key={item.id}>
                            <Card.Img variant='top' src={item.image_url} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>Shop: {item.shop_name}</Card.Text>
                                <Card.Text>{item.price}$</Card.Text>
                                <Button variant='dark'>Add to Cart</Button>
                                <Button variant='dark'>Add to favorite</Button>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
