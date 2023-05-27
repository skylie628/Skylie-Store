import db from "../models";
const {Op} = require('sequelize');
export const getSalesPrice = (product_id) => new Promise(async (resolve, reject) => {
    console.log(product_id);
    const response = await db.SaleProduct.findOne(
        {where :
            {
                    product_id: product_id
            },
        include: [{
            model: db.SaleCampaign,
            where: {status:'Active'},
            as:'campaign'
        }],
        nest: true,
        raw: true
        })
        console.log('response là',response);
        response ? resolve(response.campaign)
        :
        resolve(0)   
})


