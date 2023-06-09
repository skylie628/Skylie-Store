const axios = require("axios");
import { apiLookupProvince,apiLookupDistrict } from "./address";
export const apiGetFee = (payload) => new Promise(async(resolve,reject)=>{
    console.log('param',payload.province,payload.district)
    const province = await apiLookupProvince(+payload.province);
    const district = await apiLookupDistrict(+payload.district);
    axios({
        method: 'get',
        url: 'https://services.giaohangtietkiem.vn/services/shipment/fee',
        params: {
            pick_province:'Tây Ninh',
            pick_district:'thành phố Tây Ninh',
            province: province?.name,
            district : district?.name,
            weight: 200*payload.quantity,
            deliver_option:'none',
        },
        headers :{
            'Token':'fed497ea62f6fb488ac8b7f0526ae222bebec160',
            'Content-Type':'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*'
        }
    }).then(rs=>{console.log('rst là',rs);resolve({fee:rs.data?.fee?.ship_fee_only||31000,err:0});})
    .catch(err =>reject(err))
})