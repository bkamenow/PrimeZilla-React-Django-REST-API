import client from "./axiosConfig";

export const getAllItems = async () => {
    const response = await client.get("shops/items/");
    return response.data;
};

export const createItem = async (shopId, itemData) => {
    const result = await client.post(`shops/${shopId}/items/create/`, itemData);
    console.log(itemData);
    return result.data;
};

// export const deleteItem = async (itemId) => {
//     const result = await client.delete(`shops/items/${itemId}`);
//     return result;
// };
