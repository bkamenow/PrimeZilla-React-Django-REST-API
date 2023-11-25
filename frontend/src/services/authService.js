import client from "./axiosConfig";

export const registerUser = async (email, username, password) => {
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
};

export const loginUser = async (email, password) => {
    const response = await client.post("/accounts/login", {
        email,
        password,
    });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
};

export const logoutUser = async () => {
    await client.post("/accounts/logout");

    localStorage.removeItem("token");
};
