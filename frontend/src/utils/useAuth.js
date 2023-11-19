import { useState, useEffect } from "react";

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                setCurrentUser(true);
            }
        };

        checkLoginStatus();
    }, [setCurrentUser]);

    const login = () => {
        setCurrentUser(true);
    };

    const logout = () => {
        setCurrentUser(false);
    };

    return {
        currentUser,
        login,
        logout,
    };
};

export default useAuth;
