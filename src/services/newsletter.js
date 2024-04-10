import axios from "axios";
import { url } from "./config";
export const saveNewsletter = async (body) => {
    const res = await axios.post(`${url}/newsletter/set`,body);
    return res.data;
}
export const saveNewsletterExpert = async (body) => {
    const res = await axios.post(`${url}/newsletterexpert/set`,body);
    return res.data;
}

