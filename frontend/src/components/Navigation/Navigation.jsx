import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import RegisterUser from "../UserAuthentication/RegisterUser";
import LoginUser from "../UserAuthentication/LoginUser";

export default function Navigation() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

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
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#home'>
                        <Link to='/'>
                            <img src='/public/images/logo.png' alt='' />
                        </Link>
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
                            <NavDropdown.Item href='#action/3.1'>
                                Profile Details
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>
                                Create Shop
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
