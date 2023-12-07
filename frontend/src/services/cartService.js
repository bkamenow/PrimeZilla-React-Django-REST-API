const baseURL = "http://127.0.0.1:8000/api/shops/";

export const add = async (userId, itemId, quantity = 1, token) => {
    const url = baseURL + "add-to-cart/";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                userId,
                itemId,
                quantity,
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAll = async (token) => {
    const url = baseURL + "get-cart-items/";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getItemDetails = async (itemId, quantity, token) => {
    const url = baseURL + `items/${itemId}/?quantity=${quantity}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const remove = async (itemId, token) => {
    const url = baseURL + `remove-from-cart/${itemId}/`;

    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return true; // Indicates successful removal
    } catch (error) {
        console.error(error);
        throw error;
    }
};
