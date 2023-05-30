
import axiosConfig from "../axiosConfig"
export const apiAddSavedProduct = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'post',
        url: 'api/v1/savedProduct',
        data: payload
    }).then(rs=>{return resolve(rs)})
    .catch(err =>{
        console.log('errors là',err);
        return reject(err.response.data)})
})

export const apiUpdateSavedProduct = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'put',
        url: 'api/v1/savedProduct',
        data: payload
    }).then((res)=>{
        console.log("service",res);
        resolve(res)
    }).catch((err=>{
        console.log("service err",err)
        reject(err.response.data)
    }))
})

export const apiGetSavedProducts = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/savedProduct',
        params: {
            account_id: payload
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})


export const apiDeleteSavedProduct = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'delete',
        url: 'api/v1/savedProduct',
        params: {
            id: payload
        }
    }).then((response)=>{ return resolve(response)})
  .catch(err=>{console.log(err);return reject(err.response.data);})
})
