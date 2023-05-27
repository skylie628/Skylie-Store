
import axiosConfig from "../axiosConfig"
export const apiAddOrder = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'post',
        url: 'api/v1/order',
        data: payload
    }).then(rs=>{return resolve(rs)})
    .catch(err =>{
        console.log('errors là',err);
        return reject(err.response.data)})
})

export const apiGetOrders = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/order',
        params: {
            account_id: payload
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
export const apiGetOrder = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: `api/v1/order/${payload}`,
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(null))
})
export const apiCancelOrder = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'delete',
        url: 'api/v1/order',
        params: {
            id: payload
        }
    }).then((response)=>{ return resolve(response)})
  .catch(err=>{return reject(err.response.data)})
})
