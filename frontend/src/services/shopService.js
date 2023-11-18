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
            console.error("Error creating shop:", errorData);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Assuming the response contains the created shop data
        const createdShop = response.data;
        console.log("Shop created:", createdShop);

        return createdShop;
    } catch (error) {
        console.error("General error creating shop:", error.message);
        throw error;
    }
};
