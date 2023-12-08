import { useState, useCallback } from "react";

import { add } from "../../services/cartService";
import { getShopItems } from "../../services/shopService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditItem from "./EditItem";

export default function ItemModal({
    id,
    image_url,
    name,
    description,
    shop_name,
    owner,
    price,
    onItemUpdate,
}) {
    const userId = localStorage.getItem("userId");
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;
    const [showEditItem, setShowEditItem] = useState(false);

    const addItemToCart = async () => {
        try {
            const result = await add(userId, id, 1, accessToken);
            return result.data;
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const editItemClickHandler = useCallback(() => {
        setShowEditItem(true);
    }, []);

    const hideEditShop = useCallback(async () => {
        setShowEditItem(false);
        onItemUpdate();
    }, [onItemUpdate]);

    return (
        <>
            {showEditItem && (
                <EditItem
                    onClose={hideEditShop}
                    onCreate={hideEditShop}
                    itemId={id}
                />
            )}

            <Card style={{ width: "18rem" }} key={id}>
                <Card.Img variant='top' src={image_url} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Shop: {shop_name}</Card.Text>
                    <Card.Text>{price}$</Card.Text>

                    {!userId || userId != owner ? (
                        <div className='form-btns'>
                            <Button variant='dark' onClick={addItemToCart}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Button>
                            <Button variant='dark'>
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                        </div>
                    ) : (
                        <div className='form-btns'>
                            <Button
                                variant='dark'
                                onClick={editItemClickHandler}
                            >
                                Edit
                            </Button>
                            <Button variant='danger'>Delete</Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}
