import client from "./axiosConfig";

export const getOne = async (userId) => {
    const result = await client.get(`/accounts/details/${userId}`);

    return result;
};

export const edit = async (userId, userData) => {
    const result = await client.put(`/accounts/edit/${userId}/`, userData);

    return result;
};

export const remove = async (userId) => {
    const result = await client.delete(`/accounts/delete/${userId}`);
    return result;
};
