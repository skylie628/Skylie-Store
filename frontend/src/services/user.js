import axiosConfig from "../axiosConfig.js";
export const apigetCurrent = () => new Promise(async(resolve, reject) => {
    try{
    const response = await axiosConfig({
        method:'get',
        url: '/api/v1/user/getCurrent',
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})

export const apiupdateCurrent = (payload) => new Promise(async(resolve, reject) => {
    try{
    const response = await axiosConfig({
        method:'put',
        url: '/api/v1/user/',
        data: payload
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})