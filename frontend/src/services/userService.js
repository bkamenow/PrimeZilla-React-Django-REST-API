const baseURL = "http://127.0.0.1:8000/api/accounts/";

export const registerUser = async (email, username, password, password2) => {
    const url = baseURL + "register";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, username, password, password2 }),
        });

        if (response.status !== 201) {
            const errorData = await response.json();
            throw new Error(
                `HTTP error! Status: ${response.status}, Message: ${errorData.detail}`
            );
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getOne = async (userId) => {
    const url = baseURL + `details/${userId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const edit = async (userId, userData) => {
    const url = baseURL + `edit/${userId}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const remove = async (userId) => {
    const url = baseURL + `delete/${userId}`;

    try {
        const response = await fetch(url, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const result = await response.json();
            return result;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
