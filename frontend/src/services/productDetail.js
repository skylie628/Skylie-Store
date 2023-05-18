import axiosConfig from "../axiosConfig"

export const apiGetProductDetail = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: `api/v1/product/${payload}`,
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})