import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import UserAuthentication from "./UserAuthentication";

export default function Navigation() {
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleLoginClick = () => {
        setShowAuthModal(true);
    };

    const handleRegisterClick = () => {
        setShowAuthModal(true);
    };

    const handleCloseModal = () => {
        setShowAuthModal(false);
    };
    const handleLogout = () => {
        // Implement your logout logic here
        // For example, clear the token and update the user state
        localStorage.removeItem("token");
        // Add any additional logic to update the user state if needed
    };

    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#home'>
                        <img src='/public/images/logo.png' alt='' />
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#features'>Features</Nav.Link>
                        <Nav.Link href='#pricing'>Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
                        <Nav.Link onClick={handleRegisterClick}>
                            Register
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {showAuthModal && <UserAuthentication onClose={handleCloseModal} />}
        </>
    );
}
