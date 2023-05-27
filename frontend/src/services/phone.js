import axiosConfig from "../axiosConfig"

export const apiGetSeries = (brandId) => new Promise(async(resolve,reject)=>{
    console.log("get series",brandId)
    axiosConfig({
        method: 'get',
        url: 'api/v1/series',
        params: {
            brandId
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
export const apiGetModel = (seriesId) => new Promise(async(resolve,reject)=>{
    console.log("get model",seriesId)
    axiosConfig({
        method: 'get',
        url: 'api/v1/model',
        params: {
            seriesId
        }
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
