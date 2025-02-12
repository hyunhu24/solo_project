import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const registerUser = async (userData) => {
    const response = await axios.post(`${instance}/users`, userData, {
        withCredentials: true,
    });

    return response.data;
};
