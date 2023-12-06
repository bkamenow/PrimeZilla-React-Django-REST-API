import client from "./axiosConfig";

export const add = async (userId, item, quantity = 1) => {
    try {
        const response = await client.post("/shops/add-to-cart/", {
            userId,
            item,
            quantity,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};
