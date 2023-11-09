import axios from "axios";
import { url } from "./config";

export const register = async (user) => {
    const res = await axios.post(`${url}/user/register`,user);
    return res;
}

export const login = async (user) => {
    const res = await axios.post(`${url}/user/login`,user);
    return res;
}

export const logout = async (userId) => {
    const res = await axios.post(`${url}/user/logout/${userId}`);
    return res;
}

export const getAllUsers = async (user) => {
    const res = await axios.get(`${url}/users`);
    return res;
}
