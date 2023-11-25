import client from "./axiosConfig";

export const getAllItems = async () => {
    const response = await client.get("shops/items/");
    return response.data;
};
