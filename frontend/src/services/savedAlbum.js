
import axiosConfig from "../axiosConfig"
export const apiAddSavedAlbum = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'post',
        url: 'api/v1/savedAlbum',
        data: payload
    }).then(rs=>{return resolve(rs)})
    .catch(err =>{
        console.log('errors là',err);
        return reject(err.response.data)})
})

export const apiUpdateSavedAlbum = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'put',
        url: 'api/v1/savedAlbum',
        data: payload
    }).then((res)=>{
        console.log("service",res);
        resolve(res)
    }).catch((err=>{
        console.log("service err",err)
        reject(err.response.data)
    }))
})

export const apiGetSavedAlbums = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/savedAlbum',
        params:payload
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})

export const apiGetShareUrl = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/savedAlbum/sharedUrl',
        params:payload
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
export const apiGetSavedByShareUrl = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/savedAlbum/SavedBySharedUrl',
        params:payload
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})

export const apiGetSavedAlbum = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: `api/v1/savedAlbum/${payload}`,
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})


export const apiDeleteSavedAlbum = (payload) => new Promise(async(resolve,reject)=>{
    console.log(payload)
    axiosConfig({
        method: 'delete',
        url: 'api/v1/savedAlbum',
        params: payload
    }).then((response)=>{ return resolve(response)})
  .catch(err=>{return reject(err.response.data)})
})
