import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ShopCard({
    shop,
    onAddItemClick,
    onEditShopClick,
    onDeleteShopClick,
}) {
    return (
        <Card style={{ width: "25rem" }}>
            <Card.Img variant='top' src={shop.image_url} alt={shop.name} />
            <Card.Body>
                <Card.Title>{shop.name}</Card.Title>
                <Card.Text>
                    <b>{shop.type}</b>
                    <br />
                    {shop.description}
                </Card.Text>
                <Button
                    variant='dark'
                    onClick={() => onAddItemClick(shop.id, shop.name)}
                >
                    Add Item
                </Button>
                <Button variant='dark' as={Link} to={`/items/${shop.id}`}>
                    View Items
                </Button>
                <Button variant='dark' onClick={() => onEditShopClick(shop.id)}>
                    Edit
                </Button>
                <Button
                    variant='danger'
                    type='button'
                    onClick={() => onDeleteShopClick(shop.id, shop.name)}
                >
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
}
