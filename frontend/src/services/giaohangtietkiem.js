import axiosConfig from "../axiosConfig"
export const apiGetFee = (payload) => new Promise(async(resolve,reject)=>{
    console.log("get Fee", payload);
    axiosConfig({
        method: 'get',
        url: 'https://services.giaohangtietkiem.vn/services/shipment/fee',
        params: {
            pick_province:'Tây Ninh',
            pick_district:'thành phố Tây Ninh',
            province: payload.province,
            district : payload.district,
            weight: 200*payload.quantity,
            deliver_option:'none',
        },
        headers :{
            'Token':'fed497ea62f6fb488ac8b7f0526ae222bebec160',
            'Content-Type':'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*'
        }
    }).then(rs=>{console.log('rst là',rs);resolve(rs.data);})
    .catch(err =>reject(err))
})