import client from "./axiosConfig";

export const getAllShops = async () => {
    try {
        const response = await client.get("/shops/");
        return response.data;
    } catch (error) {
        console.error("Error fetching shops:", error);
        throw error;
    }
};

export const createShop = async (formData) => {
    try {
        const response = await client.post("/shops/", formData);

        if (response.status !== 201) {
            const errorData = response.data;
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const createdShop = response.data;

        return createdShop;
    } catch (error) {
        throw error;
    }
};

export const getShopItems = async (shopId) => {
    try {
        const response = await client.get(`/shops/${shopId}/items/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching shop items:", error);
        throw error;
    }
};
