import { useState, useCallback } from "react";

import { add } from "../../services/cartService";
import { useCart } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";

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
    const authTokens = JSON.parse(localStorage.getItem("authTokens"));
    const accessToken = authTokens ? authTokens.access : null;
    const [showEditItem, setShowEditItem] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const { cartChange } = useCart();

    const addItemToCart = async () => {
        try {
            const result = await add(userId, id, 1, accessToken);
            cartChange(result.data);
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

    const handleDeleteItemClick = useCallback(() => {
        setIsDeleting(true);
    }, []);

    const handleDeleteItemClose = useCallback(() => {
        setIsDeleting(false);
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
            {isDeleting && (
                <DeleteItem
                    onClose={handleDeleteItemClose}
                    itemId={id}
                    itemName={name}
                    onDelete={handleDeleteItemClose}
                />
            )}

            <Card style={{ width: "18rem" }} key={id}>
                <Card.Img variant='top' src={image_url} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Shop: {shop_name}</Card.Text>
                    <Card.Text>{price}$</Card.Text>

                    {!userId || userId !== owner ? (
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
                            <Button
                                variant='danger'
                                onClick={handleDeleteItemClick}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}
