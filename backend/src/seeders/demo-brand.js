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
   const appleModels = [
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 Plus",
    "iPhone 14",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13",
    "iPhone 13 Mini",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 Mini",
    "iPhone SE (2020)",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
     "iPhone Xs Max", 
     "iPhone Xs", 
     "iPhone Xr", 
     "iPhone X", 
     "iPhone8 plus", 
     "iPhone8", 
     "iPhone7 plus", 
     "iPhone7", 
     "iPhone6 plus/6s plus", 
     "iPhone6/6s", 
     "iPhone5/5s/SE", 
     "iPhone4/4s"
  ]
  
  const samsungModels =[
    "Galaxy S23 Ultra",
    "Galaxy S23 Plus",
    "Galaxy S23",
    "Galaxy S22 Ultra",
    "Galaxy S22 Plus",
    "Galaxy S22",
    "Galaxy S21 Ultra",
    "Galaxy S21 Plus",
    "Galaxy S21 FE",
    "Galaxy S21",
    "Galaxy S20 Ultra",
    "Galaxy S20 Plus",
    "Galaxy S20 FE",
    "Galaxy S20",
     "Galaxy S10 5G", 
     "Galaxy S10 Plus", 
     "Galaxy S10 Lite", 
     "Galaxy S10", 
     "Galaxy S10E", 
     "Galaxy S9 Plus", 
     "Galaxy S9", 
     "Galaxy S8 Plus", 
     "Galaxy S8", 
     "Galaxy S7 Edge", 
     "Galaxy S7", 
     "Galaxy S6 Edge Plus", 
     "Galaxy S6 Edge", 
     "Galaxy S6", 
     "Galaxy S5", 
     "Galaxy S4", 
     "Galaxy S3",


     "Galaxy A80", "Galaxy A73 5G", "Galaxy A72", "Galaxy A71", "Galaxy A70",
    "Galaxy A60", "Galaxy A53 5G", "Galaxy A52S", "Galaxy A52", "Galaxy A51", 
    "Galaxy A51", "Galaxy A50s", "Galaxy A50", "Galaxy A34 5G", "Galaxy A33 5G", 
    "Galaxy A32 5G", "Galaxy A32 4G", "Galaxy A31", "Galaxy A30s", "Galaxy A30",
    "Galaxy A23 4G", "Galaxy A22 5G", "Galaxy A22 4G", "Galaxy A21s", "Galaxy A20s", 
    "Galaxy A20", "Galaxy A13 4G", "Galaxy A14 5G", "Galaxy A12", "Galaxy A11", 
    "Galaxy A10s", "Galaxy A10", "Galaxy A9 2018", "Galaxy A9 Pro", "Galaxy A9", "Galaxy A8s",
    "Galaxy A8 Star", "Galaxy A8 Plus (2018)", "Galaxy A8 (2018)", "Galaxy A8 (2016)",
    "Galaxy A8 (2015)", "Galaxy A7 (2018)", "Galaxy A7 (2017)", "Galaxy A7 (2016)", 
    "Galaxy A7 (2015)", "Galaxy A6s", "Galaxy A6 Plus (2018)", "Galaxy A6 (2018)",
    "Galaxy A5 (2017)", "Galaxy A5 (2016)", "Galaxy A5 (2015)", "Galaxy A3 (2017)", 
    "Galaxy A3 (2016)", "Galaxy A3 (2015)", "Galaxy A04S", 
    "Galaxy A04", "Galaxy A03S", "Galaxy A03", "Galaxy A02", "Galaxy A01",


  "Galaxy J1 mini", "J1 (2015)", "Galaxy J1 (2016)", "Galaxy J2 (2016)", 
    "Galaxy J2 Core", "Galaxy J2 Prime", "Galaxy J2 Pro", "Galaxy J3 (2015)",
     "Galaxy J3 (2016)", "Galaxy J3 (2017)", "Galaxy J3 Pro", "Galaxy J4", "Galaxy J4 Plus",
      "Galaxy J5 (2015)", "Galaxy J5 (2016)", "Galaxy J5 Prime", "Galaxy J6 (2018)",
       "Galaxy J6 Plus", "Galaxy J7 (2015)", "Galaxy J7 (2016)", "Galaxy J7 (2017)", 
      "Galaxy J7 plus", "Galaxy J7 Prime", "Galaxy J7 pro", "J7 Duo", "Galaxy J8",

  "Note 20 Ultra", "Note 20", "Note 10 Plus", "Note 10 Lite", "Note 10", "Note 9", "Note 8",
   "Note 7/ Note FE", "Note 5", "Note 4", "Note 3",

  "Galaxy Core Prime", "Galaxy Grand Prime", "Galaxy C7/ C7 Pro", "Galaxy C9 Pro",
  "Galaxy M02", "Galaxy M10", "Galaxy M11", "Galaxy M12", "Galaxy M20", "Galaxy M21", 
  "Galaxy M22", "Galaxy M23", "Galaxy M30", "Galaxy M30s", "Galaxy M31", "Galaxy M32",
  "Galaxy M33", "Galaxy M51", "Galaxy M52", "Galaxy M53", "Galaxy M62", "Galaxy Z Flip 3",
  "Galaxy Z Flip 4", "Galaxy Z Fold 3", "Galaxy Z Fold 4"


  ]
  const lgModels =["LG X Power", "LG G2", "LG G3", "LG G4", "LG G5", "LG G6", "LG G7",
   "LG V10", "LG V20", "LG V30", "LG K10 (2017)"]

  const xiaomiModels =["Mi 4",
  "Mi 4C/ 4i",
  "Mi 5",
  "Mi 5C",
  "Mi 5s",
  "Mi 5S Plus",
  "Mi 5x",
  "Mi 6",
  "Mi 6X/ Mi A2",
  "Mi 8",
  "Mi 8 Lite",
  "Mi 8 Pro",
  "Mi 8 SE",
  "Mi 9",
  "Mi 9 Lite",
  "Mi 9 SE",
  "Mi 9T",
  "Mi 10S",
  "Mi 10T Lite",
  "Mi 10T Pro",
  "Mi 11 5G",
  "Mi 11 Lite",
  "Mi A1",
  "Mi A2",
  "Mi A2 Lite",
  "Mi A3",
  "Mi Max",
  "Mi Max 2",
   "Mi Max 3", 
   "Mi Mix", 
   "Mi Mix 2", 
   "Mi Mix 2s", 
   "Mi Mix 3", 
   "Mi Note", 
   "Mi Note10", 
   "Mi Note10 Lite", 
   "Mi Note10 Pro", 
   "Mi CC9", 
   "Mi CC9E", 
   "Mi CC9 Pro", 
   "Mi Play",
  
   "Redmi 3",
  "Redmi 3s",
  "Redmi 4",
  "Redmi 4 Prime",
  "Redmi 4A",
  "Redmi 4X",
  "Redmi 5",
  "Redmi 5 Plus",
  "Redmi 5A",
  "Redmi 6",
  "Redmi 6A",
  "Redmi 6 Pro",
  "Redmi 7",
  "Redmi 7A",
  "Redmi 8",
  "Redmi 8A",
  "Redmi 9",
  "Redmi 9A",
  "Redmi 9C",
  "Redmi 9i",
   "Redmi Note 2", 
   "Redmi Note 3", 
   "Redmi Note 3 Pro", 
   "Redmi Note 4", 
   "Redmi Note 4X", 
   "Redmi Note 5", 
   "Redmi Note 5 Pro", 
   "Redmi Note 5A", 
   "Redmi Note 5A Prime", 
   "Redmi Note 6", 
   "Redmi Note 6 Pro", 
   "Redmi Note 7", 
   "Redmi Note 7 Pro", 
   "Redmi Note 8", 
   "Redmi Note 8 Pro", 
   "Redmi Note 9", 
   "Redmi Note 9 Pro", 
   "Redmi Note 9 Pro 5G", 
   "Redmi Note 9s", 
   "Redmi Note 10 - 4G", 
   "Redmi Note 10S - 4G", 
   "Redmi Note 10 Pro", 
   "Redmi Note 10 Pro-5G", 
   "Redmi Note 11 - 4G", 
   "Redmi Note 11 - 5G", 
   "Redmi Note 11S", 
   "Redmi note 11S - 5G", 
    "Redmi note 11Pro",  
    "Redmi go",  
    "Redmi pro ",  
    "Redmik20/ Redmik20Pro ",  
    "Redmi k30 ",  
    "Xiaomi Redmik30Pro ",  
    "Redmi k40 ",  
    "Redmik40 Gaming ",  
    "Redmi k50 ",  
    "Redmi k50 Pro ",  
    "Redmi k50 Gaming ",  
    "Redmi s2 "
  ]

  const huaweiModels =["Honor 4C", "Honor 5A", "Honor 5C", "Honor 5X", 
  "Honor 6X", "Honor 7A", "Honor 7C", "Huawei Honor 8x", "Honor 8a", "Honor 9 Lite", 
  "Honor 9X", "Honor 10", "Honor 10 Lite", "Huawei Honor Play",

  "Huawei Mate 10 Lite", "Huawei Mate 20", "Huawei Mate 20 Lite", "Huawei Mate 20 Pro",
   "Huawei Mate 30", "Huawei Mate 30 Lite", "Huawei Mate 30 Pro",


   "Huawei Nova 2i", "Huawei Nova 3", "Huawei Nova 3e", "Huawei Nova 3i", "Huawei Nova 5i",
    "Huawei Nova 5T", "Huawei Nova 7i",


    "Huawei P10 Lite", "Huawei P20", "Huawei P20 Lite", "Huawei P20 Pro", "Huawei P30 Lite", 
    "Huawei P30", "Huawei P30 Pro",

    "Huawei Y3 II/ Y32", "Huawei Y3 2017", "Huawei Y5 II/ Y52", "Huawei Y5 2017",
    "Huawei Y5 2017 Lite", "Huawei Y6 2018", "Huawei Y6 Prime (2018)", "Huawei Y7 Prime", 
    "Huawei Y7 Prime 2018", "Huawei Y7 Pro (2018)", "Huawei Y7 Pro (2019)", "Huawei Y9 (2018)",
    "Huawei Y9 (2019)", "Huawei Y9 Prime 2019",

    "Huawei GR5 Mini", "Huawei GR5 2015", "Huawei GR5 2016", "Huawei GR5 2017",
     "Huawei GR5 2017 Pro"
]

const oppoModels =[
  "Link", "Oppo A1k", "Oppo A3S", "Oppo A5s", "Oppo A5 2020", "Oppo A7", "Oppo A9 2020", 
  "Oppo A11", "Oppo A11w", "Oppo A12", "Oppo A12e", "Oppo A15", "Oppo A15s", "Oppo A16", 
  "OPPO A16K", "Oppo A17", "Oppo A17K", "Oppo A31", "Oppo A33", "Oppo A35", "Oppo A37", 
  "Oppo A39", "Oppo A51", "Oppo A52", "Oppo A53", "Oppo A54", "Oppo A55", "Oppo A57",
  "Oppo A57 2022", "Oppo A59", "Oppo A71", "Oppo A73", "Oppo A74", "Oppo A76", "Oppo A77",
  "Oppo A77S", "Oppo A83", "Oppo A91", "Oppo A92", "Oppo A92S", "Oppo A93", "Oppo A94", 
  "Oppo A95", "Oppo A96 4G", "Oppo A96 5G",

  "Oppo F1", "Oppo F1 Plus", "Oppo F1s", "Oppo F3", "Oppo F3 Lite", "Oppo F3 Plus", "Oppo F5",
   "Oppo F5 Youth", "Oppo F7", "Oppo F7 Youth", "Oppo F9", "Oppo F11", "Oppo F11 Pro",

   "Oppo R1s", "Oppo R5", "Oppo R7", "Oppo R7 Lite", "Oppo R7 Plus", "Oppo R7s", "Oppo R9", 
   "Oppo R9s", "Oppo R9s Plus", "Oppo R11", "Oppo R11 Plus", "Oppo R17", "Oppo R17 Pro",


   "Oppo Reno 8Z", "Reno8 T 5G", "Oppo Reno 8 Pro Plus", "Oppo Reno 8 Pro", "Oppo Reno 8 5G", 
   "Oppo Reno 8 4G", "Oppo Reno 7Z", "Oppo Reno 7 Pro", "Oppo Reno 7", "Oppo Reno 7 4G", 
   "Oppo Reno 6Z", "Oppo Reno 6 Pro", "Oppo Reno 6", "Oppo Reno 5", "Oppo Reno 4", 
   "Oppo Reno 4 Pro", "Oppo Reno 3", "Oppo Reno 3 Pro", "Oppo Reno 2F", "Oppo Reno 2",
    "Oppo Reno",

   "Oppo Find 7", "Oppo Find X2", "Oppo Find X3 Pro 5G", "Oppo Joy 3", "Oppo K3", "Oppo K5", 
   "Oppo Mirro 5", "Oppo Neo 5", "Oppo Neo 7", "Oppo Neo 9", "Oppo Neo 9s",


  ]

    await queryInterface.bulkInsert('Brands', [{
       name: 'Iphone',
       id: '1'
     },
     {
      name: 'Samsung',
      id: '2'
    },
    {
      name: 'Xiaomi',
      id: '3'
    },
    {
      name: 'Lg',
      id: '4'
    },
    {
      name: 'Huawei',
      id: '5'
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
