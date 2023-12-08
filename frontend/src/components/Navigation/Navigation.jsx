import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAll } from "../../services/cartService";
import { useCart } from "../../context/CartContext";
import AuthContext from "../../context/AuthContext";
import Path from "../../paths";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import RegisterUser from "../UserAuthentication/RegisterUser";
import LoginUser from "../UserAuthentication/LoginUser";
import CreateShop from "../Shops/CreateShop/CreateShop";
import UserDetails from "../UserDetails/UserDetails";

export default function Navigation() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showProfileDetails, setShowProfileDetails] = useState(false);
    const [showCreateShop, setShowCreateShop] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const { cartState } = useCart();
    let { authTokens, logoutUser } = useContext(AuthContext);

    const createShopClickHandler = () => {
        setShowCreateShop(true);
    };

    const hideCreateShop = () => {
        setShowCreateShop(false);
    };

    const userDetailsClickHandler = () => {
        setShowProfileDetails(true);
    };

    const hideProfileDetails = () => {
        setShowProfileDetails(false);
    };

    const registerUserClickHandler = () => {
        setShowRegister(true);
    };

    const hideUserRegister = () => {
        setShowRegister(false);
    };

    const loginUserClickHandler = () => {
        setShowLogin(true);
    };

    const hideUserLogin = () => {
        setShowLogin(false);
    };

    const handleLogin = () => {
        login();
    };

    const handleLogout = () => {
        logoutUser();
    };

    useEffect(() => {
        getCartItemCount();
    }, [cartState]);

    const getCartItemCount = async () => {
        try {
            const cartItems = await getAll(authTokens.access);
            const itemCount = cartItems.length;
            setCartItemCount(itemCount);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    return (
        <>
            {showRegister && <RegisterUser onClose={hideUserRegister} />}

            {showLogin && (
                <LoginUser onClose={hideUserLogin} onLogin={handleLogin} />
            )}

            {showCreateShop && (
                <CreateShop
                    onClose={hideCreateShop}
                    onCreate={hideCreateShop}
                />
            )}

            {showProfileDetails && (
                <UserDetails
                    onClose={hideProfileDetails}
                    onDelete={() => {
                        handleLogout();
                        hideProfileDetails();
                    }}
                />
            )}

            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src='/public/images/logo.png' alt='logo' />
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to={Path.Home}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={Path.Shops}>
                            Shops
                        </Nav.Link>
                        <Nav.Link as={Link} to={Path.AllItems}>
                            All Items
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {authTokens ? (
                            <>
                                <Nav.Link as={Link} to={Path.Cart}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    {cartItemCount > 0 && (
                                        <span
                                            className='badge badge-warning'
                                            id='lblCartCount'
                                        >
                                            {cartItemCount}
                                        </span>
                                    )}
                                </Nav.Link>
                                <Nav.Link as={Link} to='/favorites'>
                                    <FontAwesomeIcon icon={faHeart} />
                                </Nav.Link>
                                <NavDropdown
                                    title='Profile'
                                    id='basic-nav-dropdown'
                                >
                                    <NavDropdown.Item
                                        href='#profile-details'
                                        onClick={userDetailsClickHandler}
                                    >
                                        Profile Details
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        onClick={createShopClickHandler}
                                        href='#create-shop'
                                    >
                                        Create Shop
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to={Path.YourShops}
                                    >
                                        Your Shops
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                        href='#logout'
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    onClick={loginUserClickHandler}
                                    href='#login'
                                >
                                    Login
                                </Nav.Link>
                                <Nav.Link
                                    onClick={registerUserClickHandler}
                                    href='#register'
                                >
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
