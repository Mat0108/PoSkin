import axios from "axios";
import { url } from "./config";

export const saveDiagnostic = async (data)=>{
    const res = await axios.post(`${url}/form/create`,data)
    return res;
}
export const getAllDiagnostic = async (data)=>{
    const res = await axios.post(`${url}/form/mail`,data)
    return res;
}
export const getDiagnosticPDF = async (pdf,body)=>{
    const res = await axios.post(`${url}/form/pdf/${pdf}`,{language:body})
    return res;
}
