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
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;
