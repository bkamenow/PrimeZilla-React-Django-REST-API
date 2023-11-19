import client from "./axiosConfig";

export const registerUser = async (email, username, password) => {
    try {
        const response = await client.post("/accounts/register", {
            email,
            username,
            password,
        });

        if (response.status !== 201) {
            const errorData = await response.json();
            throw new Error(
                `HTTP error! Status: ${response.status}, Message: ${errorData.detail}`
            );
        }

        const userData = response.data;

        return userData;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await client.post("/accounts/login", {
            email,
            password,
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error logging in:", error.message);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await client.post("/accounts/logout");

        localStorage.removeItem("token");
    } catch (error) {
        console.error("Logout error:", error.message);
    }
};
