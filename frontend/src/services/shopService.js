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
