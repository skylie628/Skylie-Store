import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import { getProductImage } from "../utils/getProductImage";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
const crypto = require("crypto");

const algorithm = "aes-256-cbc"; 
// generate 16 bytes of random data
//const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
//const Securitykey = crypto.randomBytes(32);
const Securitykey =  Buffer.from("isMblXd+uMX2SM9VbNEkDVap1t6hQ4gzjoF/RAzDRxo=".toString('base64'), 'base64')
const initVector = Buffer.from("rtEqYq7sk1gENzJxw+juVA==".toString('base64'), 'base64') 
export const addSavedAlbumServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.SavedAlbum.findOrCreate({
        where :info,
        defaults:{
            id,
            ...info
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add saved album successfully' 
    })
    : 
    reject(new ConflictError('Địa chỉ đã tồn tại'))
})


export const getSavedAlbumsServices = ({account_id}) => new Promise(async (resolve, reject) => {
   try{
    let response = await db.SavedAlbum.findAll({
        where :{
        account_id
        },
        include:[
        {
            model: db.SavedProduct,
            as:'savedProduct',
            include:[
                {model: db.Product,
                attributes:['id','name'],
                as: 'product',
                include: [{
                    model: db.ProductOption,
                    attributes:['straight_img_thumbnail'],
                    as:'options'
                }]
                }

            ]
        }
        ],
        nest: true
    })
    //get image link

    response = JSON.parse(JSON.stringify(response));
   // console.log('rs order la',response[0].savedProduct[0].product);
    const promises = response.map((savedAlbum,index) =>{
        const innerPromise = savedAlbum.savedProduct.map(savedProduct => 
            getProductImage(`Products/Medium/straight image thumbnail/${savedProduct.product.options[0].straight_img_thumbnail}.png`)
            .then(rst => ({...savedProduct,product:{...savedProduct.product,option:{straight_img_thumbnail:rst[0]}}}))
            )
        return Promise.all(innerPromise).then(rs => {return {...savedAlbum,savedProduct:rs}})
    })
    const fectchresult = await Promise.all(promises)

    resolve({
        data: fectchresult,
        err: 0,
    }) }
    catch(err){reject(new InvalidParamError('Get không thành công'))}
})

export const getSavedAlbumServices = (id) => new Promise(async (resolve, reject) => {
   try{
    let savedAlbum = await db.SavedAlbum.findOne({
        where :{
            id
        },
        include:[
        {
            model: db.SavedProduct,
            as:'savedProduct',
            include:[
                {model: db.Product,
                attributes:['id','name','slug'],
                as: 'product',
                include: [{
                    model: db.ProductOption,
                    attributes:['straight_img_thumbnail'],
                    as:'options'
                }]
                }

            ]
        },
        {
            model: db.Account,
            attributes:['id','lastname'],
            as:'account',
        }
        ],
        nest: true
    })
    //get image link

    savedAlbum = JSON.parse(JSON.stringify(savedAlbum));
    console.log('rs order la',savedAlbum);

    const promises = savedAlbum?.savedProduct.map(savedProduct => 
            getProductImage(`Products/Medium/straight image thumbnail/${savedProduct.product.options[0].straight_img_thumbnail}.png`)
            .then(rst => ({...savedProduct,product:{...savedProduct.product,options:{straight_img_thumbnail:rst[0]}}}))
            )
    const fectchresult  =  await Promise.all(promises).then(rst=> ({...savedAlbum,savedProduct:rst}))
    resolve({
        data: fectchresult,
        err: 0,
    }) }
    catch(err){reject(new InvalidParamError('Get không thành công'))}
})
export const getShareUrlServices= (albumId) => new Promise(async (resolve, reject) => {
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(albumId, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    resolve({
        access_id: encryptedData,
        err: 0,
    })
})
export const getSavedAlbumByShareUrlServices= (accessToken) => new Promise(async (resolve, reject) => {
  try{  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let albumId = decipher.update(accessToken, "hex", "utf-8");
    albumId += decipher.final("utf8");
    const rs = await getSavedAlbumServices(albumId);
    console.log('album là',rs.data)
    rs.data ? 
    resolve({
        data: rs.data,
        err: 0,
    }) 
    :
    reject(new InvalidParamError('access id không hợp lệ')) }
    catch(err){
        reject(new InvalidParamError('access id không hợp lệ'))
    }
})
export const updateSavedAlbumServices = (albumInfo) => new Promise(async (resolve, reject) => {
    console.log('al là',albumInfo
        )
    const response = await db.SavedAlbum.update(
        albumInfo,
        {where :
            {
                id:albumInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update saved album successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy saved album tương ứng'))
})


export const deleteSavedAlbumServices = ({id}) => new Promise(async (resolve, reject) => {

    const response = await db.SavedAlbum.destroy(
        {where :
            {
                id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'delete save album successfully'})
        :
        reject( new InvalidParamError('Không tìm thấy saved album tương ứng'))   
})




