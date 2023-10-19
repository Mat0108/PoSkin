import axios from "axios";
export const getBlogs = async () => {
    const res = await axios.get(`https://poapi1-sgl9cp2c.b4a.run/blog`);
    return res.data;
}
export const getBlogbyField = async (Field) => {
    const res = await axios.get(`https://poapi1-sgl9cp2c.b4a.run/blog/get/alt/${Field}`);
    return res.data;
}