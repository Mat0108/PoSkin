const urlLocal = "http://localhost:8080";
const urlProd = "https://coral-app-d9hf4.ondigitalocean.app"
export const url = process.env.NODE_ENV == "production" ? urlProd : urlLocal;
console.log('url : ', url,process.env.NODE_ENV)
