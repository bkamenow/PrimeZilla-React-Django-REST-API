import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { getAllItems } from "../../services/itemService";

export default function ItemsList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllItems();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container items'>
                {items.map((item) => (
                    <Card style={{ width: "18rem" }} key={item.id}>
                        <Card.Img
                            variant='top'
                            src={item.image_url}
                            alt={item.name}
                        />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                <b>{item.type}</b>
                                <br />
                                {item.description}
                            </Card.Text>
                            <Card.Text>{item.price}$</Card.Text>
                            <Button variant='dark'>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
