import axios from "axios";
import { url } from "./config";

export const GetAllExperts = async () => {
    const res = await axios.get(`${url}/users/expert`);
    return res;
}
export const getRdvOfExpert = async (email) =>{
    const res = await axios.post(`${url}/rdv/getbyuser/`,{Compte:email});
    return res;
}
