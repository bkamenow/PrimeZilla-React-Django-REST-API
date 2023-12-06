import { useState, useEffect } from "react";

const useAuth = () => {
    const [isAuthenticated, setAuthentication] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                setAuthentication(true);
            }
        };

        checkLoginStatus();
    }, [setAuthentication]);

    const login = () => {
        setAuthentication(true);
    };

    const logout = () => {
        setAuthentication(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userCart");
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;
