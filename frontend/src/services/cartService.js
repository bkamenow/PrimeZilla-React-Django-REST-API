const baseURL = "http://127.0.0.1:8000/api/shops/";

export const add = async (userId, item, quantity = 1) => {
    const url = baseURL + "add-to-cart/";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                item,
                quantity,
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
