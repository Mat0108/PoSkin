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
export const CreateRdv = async (body)=>{
    const res = await axios.post(`${url}/rdv/set`,body);
    return res;
}
export const getRdv = async (rdvId)=>{
    const res = await axios.get(`${url}/rdv/get/${rdvId}`);
    return res;
}

export const confirmRdv = async (rdvId,language)=>{
    const res = await axios.post(`${url}/rdv/update/${rdvId}`,{Confirmation:true,language:language})
    return res;
}