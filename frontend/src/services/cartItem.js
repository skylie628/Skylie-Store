import axiosConfig from "../axiosConfig"

export const apiGetCartId = (payload) => new Promise(async(resolve,reject)=>{
    console.log("get cartId", payload);
    axiosConfig({
        method: 'get',
        url: 'api/v1/cart',
        params: {
            account_id : payload
        }
    }).then(rs=>{console.log('rst là',rs);resolve(rs.data);})
    .catch(err =>reject(err))
})

export const apiGetCartItems = (payload) => new Promise(async(resolve,reject)=>{
    console.log("get cartItems",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/cartItem',
        params: {
            cart_id : payload
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})

export const apiUpdateCartItem = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'put',
        url: 'api/v1/cartItem',
        data: payload
    }).then((res)=>{
        console.log("service",res);
        resolve(res)
    }).catch((err=>{
        console.log("service err",err)
        reject(err.response.data)
    }))
})


export const apiAddCartItem = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'post',
        url: 'api/v1/cartItem',
        data: payload
    }).then(rs=>{return resolve(rs)})
    .catch(err =>{
        console.log('errors là',err);
        return reject(err.response.data)})
})

export const apiDeleteCartItem = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'delete',
        url: 'api/v1/cartItem',
        params: {
            id: payload
        }
    }).then((response)=>{ return resolve(response)})
  .catch(err=>{return reject(err.response.data)})
})
