
import axiosConfig from "../axiosConfig"
export const apiAddShippingAddress = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'post',
        url: 'api/v1/shippingAddress',
        data: payload
    }).then(rs=>{return resolve(rs)})
    .catch(err =>{
        console.log('errors là',err);
        return reject(err.response.data)})
})

export const apiUpdateShippingAddress = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'put',
        url: 'api/v1/shippingAddress',
        data: payload
    }).then((res)=>{
        console.log("service",res);
        resolve(res)
    }).catch((err=>{
        console.log("service err",err)
        reject(err.response.data)
    }))
})

export const apiGetShippingAddresses = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/shippingAddress',
        params: {
            account_id: payload
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})


export const apiDeleteShippingAddress = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'delete',
        url: 'api/v1/shippingAddress',
        params: {
            id: payload
        }
    }).then((response)=>{ return resolve(response)})
  .catch(err=>{return reject(err.response.data)})
})
