import axiosConfig from "../axiosConfig"

export const apiGetCollections = () => new Promise(async(resolve,reject)=>{
    console.log("get color")
    axiosConfig({
        method: 'get',
        url: 'api/v1/admin/collection',
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
