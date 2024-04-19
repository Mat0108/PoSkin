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

export const forgotPassword = async (body) => {
    const res = await axios.post(`${url}/users/forgetpassword`,body);
    return res;
}

export const forgotPasswordCheckToken = async (TokenId) => {
    const res = await axios.post(`${url}/users/validatetoken`,{resetToken:TokenId});
    return res;
}
export const forgotPasswordValider = async (body) => {
    const res = await axios.post(`${url}/users/editpassword`,body);
    return res;
}

export const patchUser = async (UserId,body) => {
    const res = await axios.patch(`${url}/user/${UserId}`,body);
    return res;
}

export const activateAccount = async (UserId) => {
    const res = await axios.get(`${url}/users/activate/${UserId}`);
    return res;
}
