
import axiosConfig from "../axiosConfig"
export const apiRegister = (payload) => new Promise(async(resolve,reject)=>{

    axiosConfig({
        method:'post',
        url: '/api/v1/auth/register',
        data:payload
    }).then(rs=>{return resolve(rs.data)})
    .catch(err =>{
        console.log('errors là',err);
        return reject(err.response.data)})

})

export const apiLogin = (payload) => new Promise(async(resolve, reject) => {

    axiosConfig({
        method:'post',
        url: '/api/v1/auth/login',
        data:payload
    }).then(rs=>resolve(rs.data))
    .catch(err =>reject(err.response.data))
    /*try{
    const response = await axiosConfig({
        method:'post',
        url: '/api/v1/auth/login',
        data:payload
    })
    resolve(response)
    }
    catch(resErr){
        console.log("errrrrr",resErr.response.data)
        reject(resErr.response.data)
    }*/
})