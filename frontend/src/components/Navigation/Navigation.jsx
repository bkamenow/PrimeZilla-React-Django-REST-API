import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import RegisterUser from "../UserAuthentication/RegisterUser";
import LoginUser from "../UserAuthentication/LoginUser";
import CreateShop from "../Shops/CreateShop";

export default function Navigation() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCreateShop, setShowCreateShop] = useState(false);

    const createShopClickHandler = () => {
        setShowCreateShop(true);
    };

    const hideCreateShop = () => {
        setShowCreateShop(false);
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

    return (
        <>
            {showRegister && (
                <RegisterUser
                    onClose={hideUserRegister}
                    // onUserRegister={registerUserHandler}
                />
            )}

            {showLogin && (
                <LoginUser
                    onClose={hideUserLogin}
                    // onUserLogin={loginUserHandler}
                />
            )}

            {showCreateShop && <CreateShop onClose={hideCreateShop} />}

            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src='/public/images/logo.png' alt='logo' />
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/shops-list'>
                            Shops
                        </Nav.Link>
                        <Nav.Link as={Link} to='/all-items'>
                            All Items
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={loginUserClickHandler}>
                            Login
                        </Nav.Link>
                        <Nav.Link onClick={registerUserClickHandler}>
                            Register
                        </Nav.Link>
                        <NavDropdown title='Profile' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#profile-details'>
                                Profile Details
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={createShopClickHandler}
                                href='#create-shop'
                            >
                                Create Shop
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#logout'>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
