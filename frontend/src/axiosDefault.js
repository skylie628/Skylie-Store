import axios from "axios";

const instance = axios.create({
    //baseURL: process.env.REACT_APP_SERVER_URL || "https://skylie-store-ecommerce.onrender.com"
    baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5000"
})
export default instance;