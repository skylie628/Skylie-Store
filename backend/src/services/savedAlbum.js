import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import { getProductImage } from "../utils/getProductImage";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
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
            limit:2,
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




