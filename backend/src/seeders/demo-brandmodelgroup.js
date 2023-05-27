'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
 const brandname =["Iphone", "Samsung", "Oppo", "Realme", "Vivo", 
 "Xiaomi", "Huawei", "Sony", "Nokia", "Zenfone", "Vsmart", "HTC", "LG", 
 "Meizu", "Motorola", "Oneplus"].map((name,key)=>
 ({
  name,
  id: `${key}`,
 }))
let i = 0;
const brandModelGroup = [
    {
    id: `${i++}`,
    name:'Iphone',
    brand_id: '0',
    },
    {
    id: `${i++}`,
    name:'Samsung Galaxy S',
    brand_id: '1',
    },
    {
    id: `${i++}`,
    name:'Samsung Galaxy A',
    brand_id: '1',
    },
    {
    id: `${i++}`,
    name:'Samsung Galaxy J',
    brand_id: '1',
    },
    {
    id: `${i++}`,
    name:'Samsung Note',
    brand_id: '1',
    },
    {
        id: `${i++}`,
        name:'Điện thoại Samsung khác',
        brand_id: '1',
        },
    {
    id: `${i++}`,
    name:'Oppo A',
    brand_id: '1',
    },
        {
    id: `${i++}`,
    name:'Oppo F',
    brand_id: '2',
    },
        {
    id:`${i++}`,
    name:'Oppo R',
    brand_id: '2',
    },
        {
    id:`${i++}`,
    name:'Oppo Reno',
    brand_id: '2',
    },
        {
    id: `${i++}`,
    name:'Oppo khác',
    brand_id: '2',
    },
    {
        id: `${i++}`,
        name:'Realme',
        brand_id: '3',
        },
    {
        id: `${i++}`,
        name:'Vivo V',
        brand_id: '4',
        },
    {
        id: `${i++}`,
        name:'Vivo Y',
        brand_id: '4',
        },

    {
        id: `${i++}`,
        name:'Vivo khác',
        brand_id: '4',
        },

    {
        id: `${i++}`,
        name:'Xiaomi Mi',
        brand_id: '5',
        },
    {
        id: `${i++}`,
        name:'Xiaomi Redmi',
        brand_id: '5',
        },
    {
        id: `${i++}`,
        name:'Xiaomi Khác',
        brand_id: '5',
        },

    {
        id: `${i++}`,
        name:'Huawei Honor',
        brand_id: '6',
        },

    {
        id: `${i++}`,
        name:'Huawei Mate',
        brand_id: '6',
        },
    {
        id: `${i++}`,
        name:'Huawei Nova',
        brand_id: '6',
        },

    {
        id: `${i++}`,
        name:'Huawei P',
        brand_id: '6',
        },

    {
        id: `${i++}`,
        name:'Huawei Y',
        brand_id: '6',
        },

    {
        id: `${i++}`,
        name:'Huawei Khác',
        brand_id: '6',
        },
    {
        id: `${i++}`,
        name:'Sony',
        brand_id: '7',
        },

    {
        id: `${i++}`,
        name:'Nokia',
        brand_id: '8',
        },

    {
        id: `${i++}`,
        name:'Zenfone',
        brand_id: '9',
        },

    {
        id: `${i++}`,
        name:'Vsmart',
        brand_id: '10',
        },
    {
        id: `${i++}`,
        name:'HTC',
        brand_id: '11',
        },
    {
        id: `${i++}`,
        name:'LG',
        brand_id: '12',
        },
        {
        id: `${i++}`,
        name:'Mezu',
        brand_id: '13',
        },
    {
        id: `${i++}`,
        name:'Motorola',
        brand_id: '14',
        },

        {
        id: `${i++}`,
        name:'Oneplus',
        brand_id: '15',
        },
]
  await queryInterface.bulkInsert('BrandModelGroups', brandModelGroup, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('BrandModelGroups', null, {});
  }
};
