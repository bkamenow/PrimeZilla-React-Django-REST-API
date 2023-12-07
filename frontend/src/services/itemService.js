const baseURL = "http://127.0.0.1:8000/api/shops/";

export const getAllItems = async () => {
    const url = baseURL + "items/";

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

export const createItem = async (shopId, itemData) => {
    const url = baseURL + `${shopId}/items/create/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        console.log(itemData);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
