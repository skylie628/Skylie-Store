import React from 'react'
import { apiLookupDistrict,apiLookupProvince,apiLookupWard } from '../services/address'
export const translateAddress = async(pcode,dcode,wcode,homenum)=>{
        const district = await apiLookupDistrict(dcode);
        const province = await apiLookupProvince(pcode);
        const ward = await apiLookupWard(wcode);
        return homenum+" " + ward.name +" " + district.name +" " + province.name;

    }
