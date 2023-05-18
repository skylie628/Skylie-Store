import axiosConfig from "../axiosConfig"

export const apiGetColors = () => new Promise(async(resolve,reject)=>{
    console.log("get color")
    axiosConfig({
        method: 'get',
        url: 'api/v1/color',
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err))
})
