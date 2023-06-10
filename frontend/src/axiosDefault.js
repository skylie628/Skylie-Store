import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "https://skylie-store-ecommerce.onrender.com"
})
export default instance;