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
    return (
        <Card style={{ width: "18rem" }} key={id}>
            <Card.Img variant='top' src={image_url} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Shop: {shop_name}</Card.Text>
                <Card.Text>{price}$</Card.Text>
                <div className='form-btns'>
                    <Button variant='dark'>Add to Cart</Button>
                    <Button variant='dark'>Add to favorite</Button>
                </div>
            </Card.Body>
        </Card>
    );
}
