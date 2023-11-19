import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../services/userService";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import RegisterUser from "../UserAuthentication/RegisterUser";
import LoginUser from "../UserAuthentication/LoginUser";
import CreateShop from "../Shops/CreateShop";
import useAuth from "../../utils/useAuth";

export default function Navigation() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCreateShop, setShowCreateShop] = useState(false);
    const { currentUser, logout } = useAuth();

    useEffect(() => {}, [currentUser]);

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

    const handleLogout = () => {
        logoutUser().then(() => {
            localStorage.removeItem("token");
            logout();
        });
    };

    return (
        <>
            {showRegister && <RegisterUser onClose={hideUserRegister} />}

            {showLogin && <LoginUser onClose={hideUserLogin} />}

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
                        {currentUser ? (
                            <NavDropdown
                                title='Profile'
                                id='basic-nav-dropdown'
                            >
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
                                <NavDropdown.Item
                                    href='#logout'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link onClick={loginUserClickHandler}>
                                    Login
                                </Nav.Link>
                                <Nav.Link onClick={registerUserClickHandler}>
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
