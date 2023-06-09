const axios = require("axios");
export const apiGetAllProvinces = () => new Promise(async(resolve, reject) => {
    try{
    const response = await axios({
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
    const response = await axios({
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
    const response = await axios({
        method:'get',
        url: `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})

export const apiLookupProvince = (provinceCode) => new Promise(async(resolve, reject) => {
    try{
    const response = await axios({
        method:'get',
        url: `https://provinces.open-api.vn/api/p/${provinceCode}`,
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})


export const apiLookupDistrict = (districtCode) => new Promise(async(resolve, reject) => {
    try{
    const response = await axios({
        method:'get',
        url: `https://provinces.open-api.vn/api/d/${districtCode}`,
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})



export const apiLookupWard = (wardCode) => new Promise(async(resolve, reject) => {
    try{
    const response = await axios({
        method:'get',
        url: `https://provinces.open-api.vn/api/w/${wardCode}`,
    })
    resolve(response.data)
    }
    catch(err){
        reject(err)
    }
})

