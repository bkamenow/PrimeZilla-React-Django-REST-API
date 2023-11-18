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
