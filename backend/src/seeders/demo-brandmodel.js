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
const brandmodels = [];
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
    ].map(x =>({name:x,brandmodelgroup_id:0}))
    
    const samsungSModels =[
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
       "Galaxy S3"].map(x =>({name:x,brandmodelgroup_id:1}))
       const samsungAModels =[
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
      "Galaxy A04", "Galaxy A03S", "Galaxy A03", "Galaxy A02", "Galaxy A01"
       ].map(x =>({name:x,brandmodelgroup_id:2}))
       const samsungJModels =[
    "Galaxy J1 mini", "J1 (2015)", "Galaxy J1 (2016)", "Galaxy J2 (2016)", 
      "Galaxy J2 Core", "Galaxy J2 Prime", "Galaxy J2 Pro", "Galaxy J3 (2015)",
       "Galaxy J3 (2016)", "Galaxy J3 (2017)", "Galaxy J3 Pro", "Galaxy J4", "Galaxy J4 Plus",
        "Galaxy J5 (2015)", "Galaxy J5 (2016)", "Galaxy J5 Prime", "Galaxy J6 (2018)",
         "Galaxy J6 Plus", "Galaxy J7 (2015)", "Galaxy J7 (2016)", "Galaxy J7 (2017)", 
        "Galaxy J7 plus", "Galaxy J7 Prime", "Galaxy J7 pro", "J7 Duo", "Galaxy J8"
       ].map(x =>({name:x,brandmodelgroup_id:3}))
       const samsungNoteModels =[
    "Note 20 Ultra", "Note 20", "Note 10 Plus", "Note 10 Lite", "Note 10", "Note 9", "Note 8",
     "Note 7/ Note FE", "Note 5", "Note 4", "Note 3"].map(x =>({name:x,brandmodelgroup_id:4}))
  
     const samsungOtherModels =["Galaxy Core Prime", "Galaxy Grand Prime", "Galaxy C7/ C7 Pro", "Galaxy C9 Pro",
    "Galaxy M02", "Galaxy M10", "Galaxy M11", "Galaxy M12", "Galaxy M20", "Galaxy M21", 
    "Galaxy M22", "Galaxy M23", "Galaxy M30", "Galaxy M30s", "Galaxy M31", "Galaxy M32",
    "Galaxy M33", "Galaxy M51", "Galaxy M52", "Galaxy M53", "Galaxy M62", "Galaxy Z Flip 3",
    "Galaxy Z Flip 4", "Galaxy Z Fold 3", "Galaxy Z Fold 4"
    ].map(x =>({name:x,brandmodelgroup_id:5}))

    const lgModels =["LG X Power", "LG G2", "LG G3", "LG G4", "LG G5", "LG G6", "LG G7",
     "LG V10", "LG V20", "LG V30", "LG K10 (2017)"].map(x =>({name:x,brandmodelgroup_id:29}))
  
    const xiaomiMiModels =["Mi 4",
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
     "Mi Play"].map(x =>({name:x,brandmodelgroup_id:15}))
    
     const xiaomiRedmiModels =[ "Redmi 3",
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
    ].map(x =>({name:x,brandmodelgroup_id:16}))
  const xiaomiOthermodels =["POCO C40", "Pocophone F1", 
  "Xiaomi Poco F3", "Xiaomi Poco X3", "Xiaomi Poco X3 Pro",
   "Poco X3 GT", "Xiaomi Poco M3", "Black Shark", "Black Shark 2", 
   "Xiaomi 11T", "Xiaomi 12", "Xiaomi 12 Pro", "Xiaomi 12T", 
   "Xiaomi 12T Pro"].map(x =>({name:x,brandmodelgroup_id:17}))
    const huaweiHornorModels =["Honor 4C", "Honor 5A", "Honor 5C", "Honor 5X", 
    "Honor 6X", "Honor 7A", "Honor 7C", "Huawei Honor 8x", "Honor 8a", "Honor 9 Lite", 
    "Honor 9X", "Honor 10", "Honor 10 Lite", "Huawei Honor Play"].map(x =>({name:x,brandmodelgroup_id:18}))
  
    const huaweiMateModels =["Huawei Mate 10 Lite", "Huawei Mate 20", "Huawei Mate 20 Lite", "Huawei Mate 20 Pro",
     "Huawei Mate 30", "Huawei Mate 30 Lite", "Huawei Mate 30 Pro"].map(x =>({name:x,brandmodelgroup_id:19}))
  
  
     const huaweiNovaModels =[ "Huawei Nova 2i", "Huawei Nova 3", "Huawei Nova 3e", "Huawei Nova 3i", "Huawei Nova 5i",
      "Huawei Nova 5T", "Huawei Nova 7i"].map(x =>({name:x,brandmodelgroup_id:20}))
  
  
      const huaweiPModels =[  "Huawei P10 Lite", "Huawei P20", "Huawei P20 Lite", "Huawei P20 Pro", "Huawei P30 Lite", 
      "Huawei P30", "Huawei P30 Pro"].map(x =>({name:x,brandmodelgroup_id:21}))
  
      const huaweiYModels =[ "Huawei Y3 II/ Y32", "Huawei Y3 2017", "Huawei Y5 II/ Y52", "Huawei Y5 2017",
      "Huawei Y5 2017 Lite", "Huawei Y6 2018", "Huawei Y6 Prime (2018)", "Huawei Y7 Prime", 
      "Huawei Y7 Prime 2018", "Huawei Y7 Pro (2018)", "Huawei Y7 Pro (2019)", "Huawei Y9 (2018)",
      "Huawei Y9 (2019)", "Huawei Y9 Prime 2019"].map(x =>({name:x,brandmodelgroup_id:22}))
  
      const huaweiModels =["Huawei GR5 Mini", "Huawei GR5 2015", "Huawei GR5 2016", "Huawei GR5 2017",
       "Huawei GR5 2017 Pro"
  ].map(x =>({name:x,brandmodelgroup_id:23}))
  
  const oppoAModels =[
     "Oppo A1k", "Oppo A3S", "Oppo A5s", "Oppo A5 2020", "Oppo A7", "Oppo A9 2020", 
    "Oppo A11", "Oppo A11w", "Oppo A12", "Oppo A12e", "Oppo A15", "Oppo A15s", "Oppo A16", 
    "OPPO A16K", "Oppo A17", "Oppo A17K", "Oppo A31", "Oppo A33", "Oppo A35", "Oppo A37", 
    "Oppo A39", "Oppo A51", "Oppo A52", "Oppo A53", "Oppo A54", "Oppo A55", "Oppo A57",
    "Oppo A57 2022", "Oppo A59", "Oppo A71", "Oppo A73", "Oppo A74", "Oppo A76", "Oppo A77",
    "Oppo A77S", "Oppo A83", "Oppo A91", "Oppo A92", "Oppo A92S", "Oppo A93", "Oppo A94", 
    "Oppo A95", "Oppo A96 4G", "Oppo A96 5G"].map(x =>({name:x,brandmodelgroup_id:6}))
  
    const oppoFModels =[ "Oppo F1", "Oppo F1 Plus", "Oppo F1s", "Oppo F3", "Oppo F3 Lite", "Oppo F3 Plus", "Oppo F5",
     "Oppo F5 Youth", "Oppo F7", "Oppo F7 Youth", "Oppo F9", "Oppo F11", "Oppo F11 Pro"
    ].map(x =>({name:x,brandmodelgroup_id:7}))
    const oppoRModels =[
     "Oppo R1s", "Oppo R5", "Oppo R7", "Oppo R7 Lite", "Oppo R7 Plus", "Oppo R7s", "Oppo R9", 
     "Oppo R9s", "Oppo R9s Plus", "Oppo R11", "Oppo R11 Plus", "Oppo R17", "Oppo R17 Pro",
    ].map(x =>({name:x,brandmodelgroup_id:8}))
    const oppoRenoModels =[
     "Oppo Reno 8Z", "Reno8 T 5G", "Oppo Reno 8 Pro Plus", "Oppo Reno 8 Pro", "Oppo Reno 8 5G", 
     "Oppo Reno 8 4G", "Oppo Reno 7Z", "Oppo Reno 7 Pro", "Oppo Reno 7", "Oppo Reno 7 4G", 
     "Oppo Reno 6Z", "Oppo Reno 6 Pro", "Oppo Reno 6", "Oppo Reno 5", "Oppo Reno 4", 
     "Oppo Reno 4 Pro", "Oppo Reno 3", "Oppo Reno 3 Pro", "Oppo Reno 2F", "Oppo Reno 2",
      "Oppo Reno"].map(x =>({name:x,brandmodelgroup_id:9}))
  
      const oppoOtherModels =[ "Oppo Find 7", "Oppo Find X2", "Oppo Find X3 Pro 5G", "Oppo Joy 3", "Oppo K3", "Oppo K5", 
     "Oppo Mirro 5", "Oppo Neo 5", "Oppo Neo 7", "Oppo Neo 9", "Oppo Neo 9s",
    ].map(x =>({name:x,brandmodelgroup_id:10}))
  
    const realmeModels = ["Realme 2", "Realme 2 Pro", "Realme 3", "Realme 3i", "Realme 3 Pro", 
    "Realme 5/ Realme 5s", "Realme 5i", "Realme 5 Pro", "Realme 6", "Realme 6 Pro", "Realme 6i",
    "Realme 7", "Realme 7 Pro", "Realme 8", "Realme 8 Pro", "Realme 9 4G", "Realme 9 Pro", 
    "Realme C1", "Realme C2", "Realme C3", "Realme C3i", "Realme C11", "Realme C12",
    "Realme C15", "Realme C17", "Realme C20", "Realme C21Y", "Realme C25", "Realme GT",
    "Realme GT Neo 2", "Realme GT Neo 2T", "Realme GT Neo 3", "Realme Narzo 30A", "Realme Q2", 
    "Realme Q3 Pro", "Realme Q5", "Realme Q5 Pro", "Realme V15", "Realme X", "Realme XT"].map(x =>({name:x,brandmodelgroup_id:11}))
  
    const vivoVModels =["Vivo V1 Max", "Vivo V3", "Vivo V3 Max", "Vivo V5/ V5s", 
    "Vivo V7", "Vivo V7 Plus", "Vivo V9", "Vivo V11/ V11 Pro", "Vivo V11i", "Vivo V15", 
    "Vivo V15 Pro", "Vivo V17", "Vivo V17 Pro", "Vivo V19", "Vivo V20", "Vivo V21 5G", 
    "Vivo V23 5G", "Vivo V23E", "Vivo V25 5G", "Vivo V25 Pro"].map(x =>({name:x,brandmodelgroup_id:12}))
    
    const vivoYModels = ["Vivo Y02S", "Vivo Y1s",
     "Vivo Y11", "Vivo Y12/ Y15/ Y17", "Vivo Y12s", "Vivo Y15A", "Vivo Y15S", "Vivo Y19", 
     "Vivo Y20", "Vivo Y20 SE", "Vivo Y21", "Vivo Y22S", "Vivo Y30", "Vivo Y31", "Vivo Y33S", 
     "Vivo Y35S", "Vivo Y37", "Vivo Y50", "Vivo Y51 2020", "Vivo Y53", "Vivo Y53S", 
     "Vivo Y55/ Y55S", "Vivo Y55 2022", "Vivo Y65", "Vivo Y66", "Vivo 67", "Vivo Y69",
      "Vivo Y71/ Y71i", "Vivo Y72", "Vivo Y81/ Y81i", "Vivo Y83", "Vivo Y83 Pro", 
      "Vivo Y91/ Y91i", "Vivo Y91C", "Vivo Y93", "Vivo Y95"].map(x =>({name:x,brandmodelgroup_id:3}))
      
    const vivoOtherModels = [ "Vivo U10", "Vivo S1",
       "Vivo S1 Pro", "Vivo T1 5G", "Vivo X6", "Vivo X6 Plus", "Vivo X9S"].map(x =>({name:x,brandmodelgroup_id:4}))
  
    const sonyModels = ["Xperia C3", "Xperia C4", "Xperia C5/ C5 Ultra", "Xepria C6",
     "Xperia L2", "Xperia M2", "Xperia M4", "Xperia M5", "Xperia X", "Xperia X Compact", 
     "Xperia X Performance", "Xperia XA", "Xperia XA Ultra", "Xperia XA1", "Xperia XA1 Plus",
      "Xperia XA1 Ultra", "Xperia XA2", "Xperia XA2 Ultra", "Xperia XZ", "Xperia XZS",
       "Xperia XZ Premium", "Xperia XZ1", "Xperia XZ2", "Sony XZ3", "Xperia Z1", "Xperia Z2", 
       "Xperia Z3", "Xperia Z4", "Xperia Z5", "Xperia Z5 Premium"].map(x =>({name:x,brandmodelgroup_id:24}))
  
    const nokiaModels =["Nokia X5", "Nokia X6", "Nokia X7", "Nokia 2",
     "Nokia 2.1", "Nokia 2.2", "Nokia 3", "Nokia 3.1", "Nokia 3.1 Plus", 
     "Nokia 3.2 (có cảm biến vân tay)", "Nokia 3.4", "Nokia 5", "Nokia 5.1 Plus",
      "Nokia 5.4", "Nokia 6", "Nokia 6.1", "Nokia 6.1 Plus", "Nokia 7 Plus", "Nokia 7.2",
      "Nokia 8", "Nokia 8.1", "Nokia 8.1 Plus", "Nokia 8.3", "Nokia 9"].map(x =>({name:x,brandmodelgroup_id:25}))
  
    const zenphoneModels = ["Zenfone 2 (5.0 inch)", "Zenfone 2 Laser (5.0 inch)",
     "Zenfone 2 Laser (5.5 inch)", "Zenfone 2 Laser (6.0 inch)", "Zenfone 3 (5.2 inch)", 
     "Zenfone 3 (5.5 inch)", "Zenfone 3 Laser", "ZenFone 3 Max (5.2 inch)", 
     "Zenfone 3 Max (5.5 inch)", "Zenfone 4 Selfie Pro", "Zenfone 4 Max", "Zenfone 4 Max Pro",
      "Zenfone 5 2015", "Zenfone 5 2018", "Zenfone 5z 2018", "Zenfone 6", 
      "Zenfone Go (4.5 inch)", "Zenfone Go (5.0 inch)", "Zenfone Go TV", "Zenfone Selfie",
       "Zenfone Live", "Zenfone Max", "Zenfone Max Pro M1", "Zenfone Max Pro M2",
        "Zenfone Max Plus M1", "Rog Phone 2", "Rog Phone 3"].map(x =>({name:x,brandmodelgroup_id:26}))
  
    const vsmartModels =["Active 1", "Active 1 Plus", "Vsmart Active 3", "Vsmart Bee", 
    "Joy 1", "Joy 1 Plus", "Joy 2 Plus", "Vsmart Joy 3", "Vsmart Joy 4", "Vsmart Live", 
    "Vsmart Live 4", "Vsmart Bee 3", "Vsmart Star", "Vsmart Star 3", "Vsmart Star 4", 
    "Vsmart Star 5", "Vsmart Aris"].map(x =>({name:x,brandmodelgroup_id:27}))
  
    const htcModels =["HTC M8", "HTC M9", "HTC M10/ HTC 10", "HTC A9", "HTC EYE", 
    "HTC U11", "HTC U11 Plus", "HTC U Ultra", "HTC U Play", "HTC Desire 620/ 820 mini", 
    "HTC Desire 628/626/630/650", "HTC Desire 728", "HTC Desire 816", "HTC Desire 820/820s",
     "HTC Desire 826", "HTC Desire 830", "HTC One M7", "HTC One M8", "HTC One M9", "HTC One X", 
    "HTC E9 Plus"].map(x =>({name:x,brandmodelgroup_id:28}))
  
    const meizuModels = ["Meizu M5C/ A5", "Meizu M5S", "Meizu M5 Note", "Meizu MX6", "Meizu M6 Note", "Meizu S6/ M6s/ S 2018"].map(x =>({name:x,brandmodelgroup_id:30}))
    
    const motorolaModels = ["Motorola Z2 Play", "Motorola X4", "Motorola M", "Motorola C", "Motorola C Plus", "E4 Plus"].map(x =>({name:x,brandmodelgroup_id:31}))
  
    const oneplusModels = ["Oneplus 3", "Oneplus 5", "Oneplus 6", "Oneplus 6T", "Oneplus 7", "Oneplus 7 Pro"].map(x =>({name:x,brandmodelgroup_id:32}))
  
  const brandModels =appleModels
  .concat(samsungSModels,samsungAModels,samsungJModels,samsungNoteModels,
    samsungOtherModels,oppoAModels,oppoFModels,oppoRModels,oppoRenoModels,
    oppoOtherModels,realmeModels,vivoVModels,vivoYModels,vivoOtherModels,
    xiaomiMiModels,xiaomiRedmiModels,huaweiHornorModels,huaweiMateModels,huaweiNovaModels
    ,huaweiPModels,huaweiYModels,huaweiModels,sonyModels,nokiaModels,
    zenphoneModels,vsmartModels,htcModels,lgModels,meizuModels,motorolaModels,oneplusModels)
     await queryInterface.bulkInsert('BrandModels',brandModels, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
