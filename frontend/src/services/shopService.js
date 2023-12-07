const baseURL = "http://127.0.0.1:8000/api/shops/";

export const getAllShops = async () => {
    const url = baseURL;

    try {
        const response = await fetch(url);

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

export const getOneShop = async (shopId) => {
    const url = baseURL + `${shopId}/`;

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

export const createShop = async (formData) => {
    const owner = localStorage.getItem("userId");
    formData = { ...formData, owner };

    const url = baseURL + "";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const createdShop = await response.json();
        return createdShop;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editShop = async (shopId, shopData) => {
    const url = baseURL + `${shopId}/`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shopData),
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

export const deleteShop = async (shopId) => {
    const url = baseURL + `${shopId}/`;

    try {
        const response = await fetch(url, {
            method: "DELETE",
        });

        if (response.status === 204) {
            return null;
        }

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

export const getShopItems = async (shopId) => {
    const url = baseURL + `${shopId}/items`;

    try {
        const response = await fetch(url);

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

export const getOwnerShops = async (userId) => {
    const url = baseURL + `${userId}/shops`;

    try {
        const response = await fetch(url);

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
