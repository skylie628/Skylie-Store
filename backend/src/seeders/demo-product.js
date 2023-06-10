'use strict';
/** @type {import('sequelize-cli').Migration} */
const slugify = require('slugify');
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
    let id = 3;
    let optionId = 0;
    const productsList= [{
        name: 'The Buffalo x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','green'],
        options : [{
         name:'Option 1',
         straight_img: 'medium-12-zodiacs-0001-str-img',
         side_img:'medium-12-zodiacs-0001-side-img',
         straight_img_thumbnail:'medium-12-zodiacs-0001-str-img-thumbnail',
         side_img_thumbnail:'medium-12-zodiacs-0001-side-img-thumbnail',
         showing_img_thumbnail:'medium-12-zodiacs-0001-showing-img-thumbnail',
        }]
      },
      {
        name: 'The Cat x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0002-str-img',
            side_img:'medium-12-zodiacs-0002-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0002-showing-img-thumbnail',
        }]
      },
      {
        name: 'The Rooster x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0003-str-img',
            side_img:'medium-12-zodiacs-0003-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0003-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Dog x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','green'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0004-str-img',
            side_img:'medium-12-zodiacs-0004-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0004-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Dragon x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0005-str-img',
            side_img:'medium-12-zodiacs-0005-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0005-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Goat x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','green'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0006-str-img',
            side_img:'medium-12-zodiacs-0006-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0006-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Horse x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','blue','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0007-str-img',
            side_img:'medium-12-zodiacs-0007-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0007-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0007-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0007-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Monkey x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','green'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0008-str-img',
            side_img:'medium-12-zodiacs-0008-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0008-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0008-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0008-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Pig x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','green'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0009-str-img',
            side_img:'medium-12-zodiacs-0009-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0009-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0009-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0009-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Rat x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','green','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0010-str-img',
            side_img:'medium-12-zodiacs-0010-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0010-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0010-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0010-showing-img-thumbnail',
        }]
      },

      {
        name: 'The Snake x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','pink'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0011-str-img',
            side_img:'medium-12-zodiacs-0011-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0011-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0011-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0011-showing-img-thumbnail',
        }]
      },
    
      {
        name: 'The Tiger x 12 Zodiacs Mecha',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 6,
        color : ['black','blue','orange'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-12-zodiacs-0012-str-img',
            side_img:'medium-12-zodiacs-0012-side-img',
            straight_img_thumbnail:'medium-12-zodiacs-0012-str-img-thumbnail',
            side_img_thumbnail:'medium-12-zodiacs-0012-side-img-thumbnail',
            showing_img_thumbnail:'medium-12-zodiacs-0012-showing-img-thumbnail',
        }]
      },
      {
        name: 'Hoo ho x Minimalism Little Ghost',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 5,
        color : ['white','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-minimalism-0001-str-img',
            side_img:'medium-minimalism-0001-side-img',
            straight_img_thumbnail:'medium-minimalism-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-minimalism-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-minimalism-0001-showing-img-thumbnail',
        }]
      },
      {
        name: 'Boo x Minimalism Little Ghost',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 5,
        color : ['blue','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-minimalism-0002-str-img',
            side_img:'medium-minimalism-0002-side-img',
            straight_img_thumbnail:'medium-minimalism-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-minimalism-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-minimalism-0002-showing-img-thumbnail',
        }]
      },

      {
        name: 'Aww x Minimalism Little Ghost',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 5,
        color : ['white','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-minimalism-0003-str-img',
            side_img:'medium-minimalism-0003-side-img',
            straight_img_thumbnail:'medium-minimalism-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-minimalism-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-minimalism-0003-showing-img-thumbnail',
        }]
      },
      {
        name: 'U oa x Minimalism Cute Gosh',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 5,
        color : ['white','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-minimalism-0004-str-img',
            side_img:'medium-minimalism-0004-side-img',
            straight_img_thumbnail:'medium-minimalism-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-minimalism-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-minimalism-0004-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Lines Art x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0001-str-img',
            side_img:'medium-neymar-0001-side-img',
            straight_img_thumbnail:'medium-neymar-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0001-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Home Jersey x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['green','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0002-str-img',
            side_img:'medium-neymar-0002-side-img',
            straight_img_thumbnail:'medium-neymar-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0002-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 01 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0003-str-img',
            side_img:'medium-neymar-0003-side-img',
            straight_img_thumbnail:'medium-neymar-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0003-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique  02 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0004-str-img',
            side_img:'medium-neymar-0004-side-img',
            straight_img_thumbnail:'medium-neymar-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0004-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 03 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0005-str-img',
            side_img:'medium-neymar-0005-side-img',
            straight_img_thumbnail:'medium-neymar-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0005-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 04 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue','purple'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0006-str-img',
            side_img:'medium-neymar-0006-side-img',
            straight_img_thumbnail:'medium-neymar-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0006-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 05 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0007-str-img',
            side_img:'medium-neymar-0007-side-img',
            straight_img_thumbnail:'medium-neymar-0007-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0007-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0007-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 6 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0008-str-img',
            side_img:'medium-neymar-0008-side-img',
            straight_img_thumbnail:'medium-neymar-0008-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0008-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0008-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 07 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['black','pink'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0009-str-img',
            side_img:'medium-neymar-0009-side-img',
            straight_img_thumbnail:'medium-neymar-0009-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0009-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0009-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 08 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0010-str-img',
            side_img:'medium-neymar-0010-side-img',
            straight_img_thumbnail:'medium-neymar-0010-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0010-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0010-showing-img-thumbnail',
        }]
      },

      {
        name: 'Neymar Unique Design 09 x Neymar',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 4,
        color : ['black','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-neymar-0011-str-img',
            side_img:'medium-neymar-0011-side-img',
            straight_img_thumbnail:'medium-neymar-0011-str-img-thumbnail',
            side_img_thumbnail:'medium-neymar-0011-side-img-thumbnail',
            showing_img_thumbnail:'medium-neymar-0011-showing-img-thumbnail',
        }]
      },

      {
        name: 'Mbappe France Team x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['green'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0001-str-img',
            side_img:'medium-mpappe-0001-side-img',
            straight_img_thumbnail:'medium-mpappe-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0001-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe PSG Running Pose x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0002-str-img',
            side_img:'medium-mpappe-0002-side-img',
            straight_img_thumbnail:'medium-mpappe-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0002-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Win Pose x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['silver'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0003-str-img',
            side_img:'medium-mpappe-0003-side-img',
            straight_img_thumbnail:'medium-mpappe-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0003-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Unique Design 01 x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['black'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0004-str-img',
            side_img:'medium-mpappe-0004-side-img',
            straight_img_thumbnail:'medium-mpappe-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0004-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Unique Design 02 x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['black','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0005-str-img',
            side_img:'medium-mpappe-0005-side-img',
            straight_img_thumbnail:'medium-mpappe-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0005-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Unique Design 03 x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['blue','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0006-str-img',
            side_img:'medium-mpappe-0006-side-img',
            straight_img_thumbnail:'medium-mpappe-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0006-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Unique Design 04 x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0007-str-img',
            side_img:'medium-mpappe-0007-side-img',
            straight_img_thumbnail:'medium-mpappe-0007-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0007-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0007-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Unique Design 05 x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['black','orange'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0008-str-img',
            side_img:'medium-mpappe-0008-side-img',
            straight_img_thumbnail:'medium-mpappe-0008-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0008-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0008-showing-image-thumbnail',
        }]
      },
      {
        name: 'Mbappe Home Jersey France x Mbappe',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 3,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-mpappe-0009-str-img',
            side_img:'medium-mpappe-0009-side-img',
            straight_img_thumbnail:'medium-mpappe-0009-str-img-thumbnail',
            side_img_thumbnail:'medium-mpappe-0009-side-img-thumbnail',
            showing_img_thumbnail:'medium-mpappe-0009-showing-image-thumbnail',
        }]
      },

      {
        name: 'CR7 MU Jumping Pose x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0001-str-img',
            side_img:'medium-cr7-0001-side-img',
            straight_img_thumbnail:'medium-cr7-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0001-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 From Behind With Signature x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['black','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0002-str-img',
            side_img:'medium-cr7-0002-side-img',
            straight_img_thumbnail:'medium-cr7-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0002-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 Home Jersey x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red','green'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0003-str-img',
            side_img:'medium-cr7-0003-side-img',
            straight_img_thumbnail:'medium-cr7-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0003-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 AL NASSR 01 x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['blue','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0004-str-img',
            side_img:'medium-cr7-0004-side-img',
            straight_img_thumbnail:'medium-cr7-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0004-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 Unique Design 01 x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0005-str-img',
            side_img:'medium-cr7-0005-side-img',
            straight_img_thumbnail:'medium-cr7-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0005-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7  Unique Design 02 x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0006-str-img',
            side_img:'medium-cr7-0006-side-img',
            straight_img_thumbnail:'medium-cr7-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0006-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 Unique Design 03 x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0007-str-img',
            side_img:'medium-cr7-0007-side-img',
            straight_img_thumbnail:'medium-cr7-0007-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0007-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0007-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 The Batipibe x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red','black'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0008-str-img',
            side_img:'medium-cr7-0008-side-img',
            straight_img_thumbnail:'medium-cr7-0008-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0008-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0008-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 Unique Design 04 x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0009-str-img',
            side_img:'medium-cr7-0009-side-img',
            straight_img_thumbnail:'medium-cr7-0009-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0009-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0009-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 Walking From Behind x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0010-str-img',
            side_img:'medium-cr7-0010-side-img',
            straight_img_thumbnail:'medium-cr7-0010-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0010-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0010-showing-img-thumbnail',
        }]
      },

      {
        name: 'CR7 Winning Pose With Signature x Ronaldo',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 2,
        color : ['red','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cr7-0011-str-img',
            side_img:'medium-cr7-0011-side-img',
            straight_img_thumbnail:'medium-cr7-0011-str-img-thumbnail',
            side_img_thumbnail:'medium-cr7-0011-side-img-thumbnail',
            showing_img_thumbnail:'medium-cr7-0011-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 World Cup Trophy 2022 With Signature x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['black','white','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0001-str-img',
            side_img:'medium-messi-0001-side-img',
            straight_img_thumbnail:'medium-messi-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0001-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 With Trophy Design x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0002-str-img',
            side_img:'medium-messi-0002-side-img',
            straight_img_thumbnail:'medium-messi-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0002-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Holding World Cup 2022 Trophy x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['black','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0003-str-img',
            side_img:'medium-messi-0003-side-img',
            straight_img_thumbnail:'medium-messi-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0003-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Unique Design 01 x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0004-str-img',
            side_img:'medium-messi-0004-side-img',
            straight_img_thumbnail:'medium-messi-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0004-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Unique Design 02 x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0005-str-img',
            side_img:'medium-messi-0005-side-img',
            straight_img_thumbnail:'medium-messi-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0005-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Holding Trophy With Teammate x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['multi'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0006-str-img',
            side_img:'medium-messi-0006-side-img',
            straight_img_thumbnail:'medium-messi-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0006-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Home Jersey x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0007-str-img',
            side_img:'medium-messi-0007-side-img',
            straight_img_thumbnail:'medium-messi-0007-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0007-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0007-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Unique Design 03 x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0008-str-img',
            side_img:'medium-messi-0008-side-img',
            straight_img_thumbnail:'medium-messi-0008-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0008-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0008-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 The True King Art x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0009-str-img',
            side_img:'medium-messi-0009-side-img',
            straight_img_thumbnail:'medium-messi-0009-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0009-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0009-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Statue Of Liberty x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0010-str-img',
            side_img:'medium-messi-0010-side-img',
            straight_img_thumbnail:'medium-messi-0010-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0010-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0010-showing-img-thumbnail',
        }]
      },

      {
        name: 'M10 Unique Design 04 x Messi',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 1,
        color : ['blue','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-messi-0011-str-img',
            side_img:'medium-messi-0011-side-img',
            straight_img_thumbnail:'medium-messi-0011-str-img-thumbnail',
            side_img_thumbnail:'medium-messi-0011-side-img-thumbnail',
            showing_img_thumbnail:'medium-messi-0011-showing-img-thumbnail',
        }]
      },

      {
        name: 'Lucy 01 x Cyberpunk',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 0,
        color : ['black'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cyperpunk-0001-str-img',
            side_img:'medium-cyperpunk-0001-side-img',
            straight_img_thumbnail:'medium-cyperpunk-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-cyperpunk-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-cyperpunk-0001-showing-image-thumbnail',
        }]
      },

      {
        name: 'Lucy 02 x Cyberpunk',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 0,
        color : ['multi'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cyperpunk-0002-str-img',
            side_img:'medium-cyperpunk-0002-side-img',
            straight_img_thumbnail:'medium-cyperpunk-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-cyperpunk-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-cyperpunk-0002-showing-image-thumbnail',
        }]
      },

      {
        name: 'Lucy 03 x Cyberpunk',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 0,
        color : ['black','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cyperpunk-0003-str-img',
            side_img:'medium-cyperpunk-0003-side-img',
            straight_img_thumbnail:'medium-cyperpunk-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-cyperpunk-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-cyperpunk-0003-showing-image-thumbnail',
        }]
      },

      {
        name: 'Lucy 04 x Cyberpunk',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 0,
        color : ['yellow','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cyperpunk-0004-str-img',
            side_img:'medium-cyperpunk-0004-side-img',
            straight_img_thumbnail:'medium-cyperpunk-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-cyperpunk-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-cyperpunk-0004-showing-image-thumbnail',
        }]
      },


      {
        name: 'Lucy 05 x Cyberpunk',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 0,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cyperpunk-0005-str-img',
            side_img:'medium-cyperpunk-0005-side-img',
            straight_img_thumbnail:'medium-cyperpunk-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-cyperpunk-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-cyperpunk-0005-showing-image-thumbnail',
        }]
      },

      {
        name: 'Lucy 06 x Cyberpunk',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 0,
        color : ['blue','yellow'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-cyperpunk-0006-str-img',
            side_img:'medium-cyperpunk-0006-side-img',
            straight_img_thumbnail:'medium-cyperpunk-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-cyperpunk-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-cyperpunk-0006-showing-image-thumbnail',
        }]
      },

      {
        name: 'Outer Space Bubha x Astronault',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 8,
        color : ['orange','red','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-astronault-0001-str-img',
            side_img:'medium-astronault-0001-side-img',
            straight_img_thumbnail:'medium-astronault-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-astronault-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-astronault-0001-showing-img-thumbnail',
        }]
      },

      {
        name: 'Outer Space Skateboard x Astronault',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 8,
        color : ['orange','red','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-astronault-0002-str-img',
            side_img:'medium-astronault-0002-side-img',
            straight_img_thumbnail:'medium-astronault-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-astronault-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-astronault-0002-showing-img-thumbnail',
        }]
      },

      {
        name: 'Outer Space Yoga x Astronault',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 95000,
        sales:0,
        collection_id: 8,
        color : ['orange','red','blue'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-astronault-0003-str-img',
            side_img:'medium-astronault-0003-side-img',
            straight_img_thumbnail:'medium-astronault-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-astronault-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-astronault-0003-showing-img-thumbnail',
        }]
      },

      {
        name: 'Nike Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['black','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0001-str-img',
            side_img:'medium-unique-0001-side-img',
            straight_img_thumbnail:'medium-unique-0001-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0001-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0001-showing-img-thumbnail',
        }]
      },

      {
        name: 'Killer Panda x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['black','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0002-str-img',
            side_img:'medium-unique-0002-side-img',
            straight_img_thumbnail:'medium-unique-0002-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0002-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0002-showing-img-thumbnail',
        }]
      },

      {
        name: 'Numeric x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['black','white'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0003-str-img',
            side_img:'medium-unique-0003-side-img',
            straight_img_thumbnail:'medium-unique-0003-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0003-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0003-showing-img-thumbnail',
        }]
      },

      {
        name: 'Random Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['multi'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0004-str-img',
            side_img:'medium-unique-0004-side-img',
            straight_img_thumbnail:'medium-unique-0004-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0004-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0004-showing-img-thumbnail',
        }]
      },

      {
        name: 'Random Doodle 1 x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['multi'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0005-str-img',
            side_img:'medium-unique-0005-side-img',
            straight_img_thumbnail:'medium-unique-0005-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0005-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0005-showing-img-thumbnail',
        }]
      },

      {
        name: 'Killer Gun Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['black','white','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0006-str-img',
            side_img:'medium-unique-0006-side-img',
            straight_img_thumbnail:'medium-unique-0006-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0006-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0006-showing-img-thumbnail',
        }]
      },

      {
        name: 'Cool Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['black','white','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0007-str-img',
            side_img:'medium-unique-0007-side-img',
            straight_img_thumbnail:'medium-unique-0007-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0007-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0007-showing-img-thumbnail',
        }]
      },

      {
        name: 'Dangerous Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['multi'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0008-str-img',
            side_img:'medium-unique-0008-side-img',
            straight_img_thumbnail:'medium-unique-0008-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0008-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0008-showing-img-thumbnail',
        }]
      },

      {
        name: 'Abstract Art Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['black','white','red'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0009-str-img',
            side_img:'medium-unique-0009-side-img',
            straight_img_thumbnail:'medium-unique-0009-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0009-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0009-showing-img-thumbnail',
        }]
      },

      {
        name: 'Funny Animal Doodle x Unique',
        id: id++,
        lasted: true,
        best_sale: false,
        price: 110000,
        sales:0,
        collection_id: 9,
        color : ['multi'],
        options : [{
            name:'Option 1',
            straight_img: 'medium-unique-0010-str-img',
            side_img:'medium-unique-0010-side-img',
            straight_img_thumbnail:'medium-unique-0010-str-img-thumbnail',
            side_img_thumbnail:'medium-unique-0010-side-img-thumbnail',
            showing_img_thumbnail:'medium-unique-0010-showing-img-thumbnail',
        }]
      },

      

     ];
      
     await queryInterface.bulkInsert('Products', productsList.map(x =>({
        name:x.name,
        id: x.id,
        lasted: x.lasted,
        best_sale: x.best_sale,
        price: x.price,
        sales:x.sales,
        collection_id: x.collection_id,
        slug: slugify(x.name)
     })), {});

     const colorList = productsList.map(product =>product.color.map(color=>({ColorId:color,ProductId:product.id }))).flat()
     const optionsList = productsList.map(product =>product.options.map(option=>({
        id: optionId++,
        name:option.name,
        straight_img: option.straight_img,
        straight_img_thumbnail: option.straight_img_thumbnail,
        side_img: option.side_img,
        side_img_thumbnail: option.side_img_thumbnail,
        showing_img_thumbnail: option.showing_img_thumbnail,
        product_id: product.id
     }))).flat()
     await queryInterface.bulkInsert('Product_Color',colorList,{});
     await queryInterface.bulkInsert('ProductOptions',optionsList,{});
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
