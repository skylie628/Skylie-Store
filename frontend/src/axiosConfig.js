import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "https://skylie-store-ecommerce.onrender.com"
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('persited token',window.localStorage.getItem('persist:root'))
    const token = window.localStorage.getItem('persist:root') && JSON.parse(localStorage.getItem('persist:root'))?.userToken?.slice(1,-1);
    config.headers = {
      authorization: `Bearer ${token}`
    }
    console.log(config.headers)
    return config;
  }, function (error) {
    console.log("intercepters err")
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;