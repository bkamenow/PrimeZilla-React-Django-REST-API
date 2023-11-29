import client from "./axiosConfig";

export const add = async (item, quantity = 1) => {
    try {
        const response = await client.post("/shops/add-to-cart/", {
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
