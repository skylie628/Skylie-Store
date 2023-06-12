import axiosConfig from "../axiosConfig"

export const apiGetProducts = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/product',
        params: {
            name:payload.searchName,
            offset: payload.offset,
            limit: 9,
            order: payload.order,
            colors: payload.colors,
            price: payload.price,
            collection: payload.collection
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
export const apiGetRecommendProducts = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/product/recommends',
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
export const apiGetSearchSuggest = (payload) => new Promise(async(resolve,reject)=>{
    console.log("payload là",payload)
    axiosConfig({
        method: 'get',
        url: 'api/v1/product',
        params: {
            name: payload.name,
            offset: 0,
            limit: 4,
            order: 1,
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})