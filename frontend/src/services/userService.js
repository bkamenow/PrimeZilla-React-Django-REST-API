import client from "./axiosConfig";

export const getOne = async (userId) => {
    const result = await client.get(`/accounts/details/${userId}`);

    return result;
};
