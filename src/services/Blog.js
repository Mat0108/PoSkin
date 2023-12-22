import axios from "axios";
import { url } from "./config";
export const getBlogs = async () => {
    const res = await axios.get(`${url}/blog`);
    return res.data;
}
export const getBlogbyField = async (Field) => {
    const res = await axios.get(`${url}/blog/get/alt/${Field}`);
    return res.data;
}

