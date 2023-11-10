import { useState } from "react";

import axios from "../services/axiosConfig";

import Button from "react-bootstrap/Button";
import UserAuthentication from "./UserAuthentication";

export default function Main() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const registerUserClickHandler = () => {
        setShowRegister(true);
    };

    const hideUserRegister = () => {
        setShowRegister(false);
    };

    const registerUserHandler = (email, username, password) => {
        axios
            .post("/api/register", {
                email: email,
                username: username,
                password: password,
            })
            .then(function (res) {
                axios
                    .post("/api/login", {
                        email: email,
                        password: password,
                    })
                    .then(function (res) {
                        // Handle the login success
                    });
            });
    };

    const loginUserClickHandler = () => {
        setShowLogin(true);
    };

    const hideUserLogin = () => {
        setShowLogin(false);
    };

    const loginUserHandler = (e) => {
        e.preventDefault();
        setShowLogin(false);

        const loginData = {
            email: email,
            password: password,
        };

        axios
            .post("/api/login", loginData)
            .then((response) => {
                const userData = response.data;

                console.log("User logged in:", userData);
            })
            .catch((error) => {
                console.error("Login failed:", error);
            });
    };

    return (
        <div className='main'>
            {showRegister && (
                <UserAuthentication
                    onClose={hideUserRegister}
                    onUserRegister={registerUserHandler}
                />
            )}

            {showLogin && (
                <UserAuthentication
                    onClose={hideUserLogin}
                    onUserLogin={loginUserHandler}
                />
            )}

            <h1>Welcome to my APP</h1>
            <br />
            <div className='user-buttons'>
                <Button
                    id='login_btn'
                    variant='primary'
                    onClick={loginUserClickHandler}
                >
                    Login
                </Button>
                <Button
                    id='register_btn'
                    variant='primary'
                    onClick={registerUserClickHandler}
                >
                    Register
                </Button>
            </div>
        </div>
    );
}
