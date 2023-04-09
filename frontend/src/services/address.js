import AxiosDefaults from "axios"
export const apiGetAllProvinces = () => new Promise(async(resolve, reject) => {
    try{
    const response = await AxiosDefaults({
        method:'get',
        url: 'https://provinces.open-api.vn/api/p/',
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})

export const apiGetDistrictsByProvince = (provinceCode) => new Promise(async(resolve, reject) => {
    try{
    const response = await AxiosDefaults({
        method:'get',
        url: `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})

export const apiGetWardsByDistrict = (districtCode) => new Promise(async(resolve, reject) => {
    try{
    const response = await AxiosDefaults({
        method:'get',
        url: `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})