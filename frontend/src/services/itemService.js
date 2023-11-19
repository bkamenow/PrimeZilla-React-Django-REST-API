import client from "./axiosConfig";

export const getAllItems = async () => {
    try {
        const response = await client.get("shops/items/");
        return response.data;
    } catch (error) {
        console.error("Error fetching shops:", error);
        throw error;
    }
};
