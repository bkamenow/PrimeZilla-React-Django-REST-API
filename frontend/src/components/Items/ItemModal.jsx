import { add } from "../../services/cartService";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ItemModal({
    id,
    image_url,
    name,
    description,
    shop_name,
    price,
}) {
    const userId = localStorage.getItem("userId");
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    const addItemToCart = async () => {
        try {
            const result = await add(userId, id, 1, accessToken);
            return result.data;
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <Card style={{ width: "18rem" }} key={id}>
            <Card.Img variant='top' src={image_url} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Shop: {shop_name}</Card.Text>
                <Card.Text>{price}$</Card.Text>
                <div className='form-btns'>
                    <Button variant='dark' onClick={addItemToCart}>
                        Add to Cart
                    </Button>
                    <Button variant='dark'>Add to favorite</Button>
                </div>
            </Card.Body>
        </Card>
    );
}
