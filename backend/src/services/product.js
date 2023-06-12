
import ConflictError from "../errors/ConflictError";
import { sequelize } from "../models";
import InvalidParamError from "../errors/InvalidParamError";
import { getProductImage } from "../utils/getProductImage";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import NotFoundError from "../errors/NotFoundError";
import { getSalesPrice } from "./saleProduct";
const {Op} = require('sequelize');
export const addProductServices = ({color,...ProductInfo}) => new Promise(async (resolve, reject) => {
    const id = uuidv4();
    const Colors = await db.Color.findAll({
        where :{
            id : color
        }})
    const response = await db.Product.create({
            id,
            ...ProductInfo,
    },{
        include: [ {model : db.ProductOption, as : 'options'} ]
    })

    response.addColor(Colors);
    if(response){
    resolve({
        id,
        err: 0,
        msg:  'add Product successfully' 
    });
}
    else{
        reject(new ConflictError('Product đã tồn tại'))}
    }
)


export const getProductsServices = (data) => new Promise(async (resolve, reject) => {
    console.log('data la',data)
    const queryObject ={
        raw:true,
        nest: true,
        include: [ {model : db.ProductOption,
            attributes:[ 'showing_img_thumbnail'],
            as : 'options'} ],
    
        }
    
    const collectionQuery = {collection_id: {[Op.eq]: data.collection}};

    
    const priceQuery = 
        data.price == 0 ? {price: { [Op.lt]: 100000}} :
        data.price == 1 ? {price: { [Op.and]: {[Op.gte]: 100000} ,[Op.lt]: 200000}} :
        {price: { [Op.gte]: 200000}}

    const nameQuery = {name : {
        [Op.iLike]:`%${data.name}%`
    }}
    let whereQuery = {}
    if(data.collection && !data.price && !data.name){
        whereQuery = collectionQuery
    } 
    else if(!data.collection && data.price  && !data.name){
        whereQuery = priceQuery
    }
    else if(!data.collection && !data.price  && data.name){
        whereQuery = nameQuery
    }
    else if(!data.collection && !data.price  && !data.name){
        whereQuery = {}
    }
    else {
        let conditions = []
        if(data.collection) {
            conditions.push(collectionQuery);
        }
        if( data.price){
            conditions.push(priceQuery);
        }
        if(data.name){
            conditions.push(nameQuery);
        }
        whereQuery ={
            [Op.and] : conditions
        }
    }
    let response = await db.Product.findAll({
        where: whereQuery,
        order: data.order == 0? [['createdAt','DESC']] : data.order == 1? [['sales','DESC']]:  data.order == 2? [['price','ASC']] :[['price','DESC']],
        include: [ {model : db.ProductOption,
            attributes:[ 'showing_img_thumbnail'],
            as : 'options'},
          {
            model: db.Color,
            attributes: ['id'],
            as : 'colors',
          } ],
          nest: true,
        //offset: +data.offset*9,
        //limit:9,
    })
    response = JSON.parse(JSON.stringify(response));
    let rst = response;
    console.log(rst.response);
    if(data.colors){
        rst = response.filter(product => product.colors.some(color=> data.colors.includes(color.id)));
    }
    const maxCount = rst.length;
    rst = rst.splice(data.offset*data.limit,data.limit);
    console.log('data là',data);
    //get Image Url
    let promises = rst.map(product => 
    getProductImage(`Products/Medium/showing image thumnail/${product.options[0].showing_img_thumbnail}.png`)
    .then(rst => ({...product,options:{showing_img_thumbnail:rst[0]}}))
    )
    let fetchedResponse = await Promise.all(promises); 

    //getSalesCampaign 
    promises = fetchedResponse.map(product => 
        getSalesPrice(product.id)
        .then(rs => ({...product,campaign:rs})))
    fetchedResponse = await Promise.all(promises); 

        //product.options.straight_img= await getProductImage(`Products/Medium/str image/${product.options.straight_img}.png`);
        //product.options.straight_img= await getProductImage(`Products/Medium/str image/${product.options.straight_img}.png`);
        //product.options.side_img_thumbnail= await getProductImage(`Products/Medium/side image thumbnail/${product.options.side_img_thumbnail}.png`);
        //product.options.side_img= await getProductImage(`Products/Medium/side image/${product.options.side_img}.png`);

    //const rst = await getProductImage(`/Products/Medium/showing image thumnail/medium-12-zodiacs-0001-showing-img-thumbnail.png`)
    //console.log(rst)
    //console.log('response là',response);
    resolve({
        data: {maxCount,products: fetchedResponse},
        err: 0,
    }) 
})
export const getRecommendProductsServices = () => new Promise(async (resolve, reject) => {
    
    let response = await db.Product.findAll({
        include: [ {model : db.ProductOption,
            attributes:[ 'showing_img_thumbnail'],
            as : 'options',
        duplicating: false,
    required: true}
        ],
        attributes:{
             include: [[sequelize.literal('(SELECT COUNT(*) FROM "Comments" as c WHERE c.product_id = "Product".id)'), 'commentsCount']]
        },
         subQuery: false,
        order: [['sales','DESC'],[sequelize.literal('"commentsCount"'), 'DESC']] ,
   
          nest: true,
        //offset: +data.offset*9,
        limit:6,
    })
    console.log('response recommend',response)
    response = JSON.parse(JSON.stringify(response));
    let rst = response;
    console.log(rst.response);
    //get Image Url
    let promises = rst.map(product => 
    getProductImage(`Products/Medium/showing image thumnail/${product.options[0].showing_img_thumbnail}.png`)
    .then(rst => ({...product,options:{showing_img_thumbnail:rst[0]}}))
    )
    let fetchedResponse = await Promise.all(promises); 

    //getSalesCampaign 
    promises = fetchedResponse.map(product => 
        getSalesPrice(product.id)
        .then(rs => ({...product,campaign:rs})))
    fetchedResponse = await Promise.all(promises); 

        //product.options.straight_img= await getProductImage(`Products/Medium/str image/${product.options.straight_img}.png`);
        //product.options.straight_img= await getProductImage(`Products/Medium/str image/${product.options.straight_img}.png`);
        //product.options.side_img_thumbnail= await getProductImage(`Products/Medium/side image thumbnail/${product.options.side_img_thumbnail}.png`);
        //product.options.side_img= await getProductImage(`Products/Medium/side image/${product.options.side_img}.png`);

    //const rst = await getProductImage(`/Products/Medium/showing image thumnail/medium-12-zodiacs-0001-showing-img-thumbnail.png`)
    //console.log(rst)
    //console.log('response là',response);
    resolve({
        data: {products: fetchedResponse},
        err: 0,
    }) 
})
export const getProductServices = (ProductInfo) => new Promise(async (resolve, reject) => {
try{
        console.log(ProductInfo)
    let response = await db.Product.findOne(
        {where :
            {
                slug: ProductInfo.slug
            },
        include: [ {model : db.ProductOption,
            attributes:[ 'id','showing_img_thumbnail','name','straight_img','straight_img_thumbnail','side_img','side_img_thumbnail'],
            as : 'options'},
            {
            model: db.Color,
            attributes: ['id'],
            as : 'colors',
        } ],
        nest: true,
        })
        response = JSON.parse(JSON.stringify(response));
        console.log('response la',response);  
        await getProductImage(`Products/Medium/showing image thumnail/${response.options[0].showing_img_thumbnail}.png`)   
        .then(rs => response.options[0].showing_img_thumbnail = rs[0] )
        await getProductImage(`Products/Medium/str image/${response.options[0].straight_img}.png`)   
        .then(rs => response.options[0].straight_img = rs[0] )
        await getProductImage(`Products/Medium/straight image thumbnail/${response.options[0].straight_img_thumbnail}.png`)   
        .then(rs => response.options[0].straight_img_thumbnail = rs[0] )
        await getProductImage(`Products/Medium/side image/${response.options[0].side_img}.png`)   
        .then(rs => response.options[0].side_img = rs[0] )
        await getProductImage(`Products/Medium/side image thumbnail/${response.options[0].side_img_thumbnail}.png`)   
        .then(rs => response.options[0].side_img_thumbnail = rs[0] )

        //getSaleCampaing
        const campaign = await getSalesPrice(response.id);
        response.campaign = campaign;
        console.log(response);

        
        response ? resolve({
        err: 0,
        data: response,
        msg: 'get thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy Product tương ứng'))
        }
        catch(err){
            reject(new InvalidParamError('Không tìm thấy Product tương ứng'))
        }
})



export const updateProductServices = ({color,options,...ProductInfo}) => new Promise(async (resolve, reject) => {
    console.log(options);
    const foundProduct = await db.Product.findOne(
        {where :
            {
                id: ProductInfo.id
            }
        })
    if(foundProduct){
        const  updatedProduct = await foundProduct.update(ProductInfo);
        const Colors = await db.Color.findAll({
            where: {
                id: color
            }})
        await Colors[0] && updatedProduct.setColors(Colors);
        await updatedProduct.setProductOptions(options);
        resolve({
            err:0,
            msg:'Update thành công'
        });
    }
    else {
        reject(new InvalidParamError('Sản phẩm không tồn tại'))
    }
}
)

export const updateProductSalesServices = ({best_sale,product_id,quantity}) => new Promise(async (resolve, reject) => {
    const response = await db.Product.increment('sales',{by:quantity,
    where:{id:product_id}});
    resolve(response);
}
)


export const deleteProductServices = (ProductInfo) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.Product.destroy(
        {where :
            {
                id: ProductInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy Product tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
})




