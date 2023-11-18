import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ShopsList() {
    return (
        <div className='background'>
            <div className='background-overlay'></div>
            <div className='shop-list-container'>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant='top' src='images/game.png' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant='top' src='holder.js/100px180' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant='top' src='holder.js/100px180' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
