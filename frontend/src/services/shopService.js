import client from "./axiosConfig";

export const getAllShops = async () => {
    const response = await client.get("/shops/");
    return response.data;
};

export const getOneShop = async (shopId) => {
    const result = await client.get(`/shops/${shopId}/`);

    return result;
};

export const createShop = async (formData) => {
    const owner = localStorage.getItem("userId");
    formData = { ...formData, owner };

    const response = await client.post("/shops/", formData);
    const createdShop = response.data;

    return createdShop;
};

export const editShop = async (shopId, shopData) => {
    const result = await client.put(`/shops/${shopId}/`, shopData);

    return result;
};

export const deleteShop = async (shopId) => {
    const result = await client.delete(`shops/${shopId}/`);
    return result;
};

export const getShopItems = async (shopId) => {
    const response = await client.get(`/shops/${shopId}/items`);
    return response.data;
};

export const getOwnerShops = async (userId) => {
    const response = await client.get(`/shops/${userId}/shops`);
    return response.data;
};
