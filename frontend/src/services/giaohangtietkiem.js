import axiosConfig from "../axiosConfig"
export const apiGetFee = (payload) => new Promise(async(resolve,reject)=>{
    console.log("get Fee", payload);
    axiosConfig({
        method: 'get',
        url: 'api/v1/shippingAddress/shippingFee',
        params: {
            province: payload.province,
            district : payload.district,
            weight: 200*payload.quantity,
        }
    }).then(rs=>{console.log('rst là',rs);resolve(rs.data);})
    .catch(err =>reject(err))
})