import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={loginUserClickHandler}>
                            Login
                        </Nav.Link>
                        <Nav.Link onClick={registerUserClickHandler}>
                            Register
                        </Nav.Link>
                        <Nav.Link>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
