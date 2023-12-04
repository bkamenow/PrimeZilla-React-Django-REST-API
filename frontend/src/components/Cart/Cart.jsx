import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

import "./Cart.css";

export default function Cart() {
    return (
        <div className='header-container cart-main'>
            <div className='header-overlay'>
                <div className='cart-scroll-container'>
                    <ListGroup className='cart-container' id='cart'>
                        <ListGroup.Item>
                            <div className='cart-item-info'>
                                <div className='cart-item-name'>Name</div>
                                <div className='cart-item-price'>112$</div>
                            </div>
                            <CloseButton />
                        </ListGroup.Item>

                        <ListGroup.Item className='cart-total'>
                            <Button variant='success'>Buy</Button>
                            <p>Total: 112$</p>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
}
