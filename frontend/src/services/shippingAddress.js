
import axiosConfig from "../axiosConfig"
export const apiAddShippingAddress = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    try{
        const response = axiosConfig({
            method: 'post',
            url: 'api/v1/shippingAddress',
            data: payload
        })
    
        resolve(response)
    } catch(err){
        reject(err)
    }
})

export const apiUpdateShippingAddress = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    try{
        const response = axiosConfig({
            method: 'put',
            url: 'api/v1/shippingAddress',
            data: payload
        })
    
        resolve(response)
    } catch(err){
        reject(err)
    }
})

export const apiGetShippingAddresses = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    try{
        const response = axiosConfig({
            method: 'get',
            url: 'api/v1/shippingAddress',
            params: {
                account_id: payload
            }
        })
    
        resolve(response)
    } catch(err){
        reject(err)
    }
})


export const apiDeleteShippingAddress = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    try{
        const response = axiosConfig({
            method: 'delete',
            url: 'api/v1/shippingAddress',
            params: {
                id: payload
            }
        })
    
        resolve(response)
    } catch(err){
        reject(err)
    }
})
