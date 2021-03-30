'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('ShoppingCarts', [
        { userId: 1, quantity: 9 } ,
        { userId: 2, quantity: 3 } ,
        { userId: 3, quantity: 2 } ,
        { userId: 4, quantity: 9 } ,
        { userId: 5, quantity: 7 } ,
        { userId: 6, quantity: 9 } ,
        { userId: 7, quantity: 8 } ,
        { userId: 8, quantity: 7 } ,
        { userId: 9, quantity: 8 } ,
        { userId: 10, quantity: 8 } ,
        { userId: 11, quantity: 1 } ,
        { userId: 12, quantity: 3 } ,
        { userId: 13, quantity: 1 } ,
        { userId: 14, quantity: 3 } ,
        { userId: 15, quantity: 6 } ,
        { userId: 16, quantity: 2 } ,
        { userId: 17, quantity: 6 } ,
        { userId: 18, quantity: 1 } ,
        { userId: 19, quantity: 1 } ,
        { userId: 20, quantity: 6 } ,
        { userId: 21, quantity: 9 } ,
        { userId: 22, quantity: 1 } ,
        { userId: 23, quantity: 3 } ,
        { userId: 24, quantity: 6 } ,
        { userId: 25, quantity: 2 } ,
        { userId: 26, quantity: 2 } ,
        { userId: 27, quantity: 1 } ,
        { userId: 28, quantity: 1 } ,
        { userId: 29, quantity: 2 } ,
        { userId: 30, quantity: 1 } ,
        { userId: 31, quantity: 8 } ,
        { userId: 32, quantity: 6 } ,
        { userId: 33, quantity: 5 } ,
        { userId: 34, quantity: 5 } ,
        { userId: 35, quantity: 5 } ,
        { userId: 36, quantity: 1 } ,
        { userId: 37, quantity: 8 } ,
        { userId: 38, quantity: 7 } ,
        { userId: 39, quantity: 1 } ,
        { userId: 40, quantity: 5 } ,
        { userId: 41, quantity: 3 } ,
        { userId: 42, quantity: 9 } ,
        { userId: 43, quantity: 5 } ,
        { userId: 44, quantity: 6 } ,
        { userId: 45, quantity: 7 } ,
        { userId: 46, quantity: 7 } ,
        { userId: 47, quantity: 8 } ,
        { userId: 48, quantity: 5 } ,
        { userId: 49, quantity: 1 } ,
        { userId: 50, quantity: 6 } ,
        { userId: 51, quantity: 9 } ,
        { userId: 52, quantity: 5 } ,
        { userId: 53, quantity: 5 } ,
        { userId: 54, quantity: 6 } ,
        { userId: 55, quantity: 5 } ,
        { userId: 56, quantity: 1 } ,
        { userId: 57, quantity: 9 } ,
        { userId: 58, quantity: 4 } ,
        { userId: 59, quantity: 4 } ,
        { userId: 60, quantity: 2 } ,
        { userId: 61, quantity: 9 } ,
        { userId: 62, quantity: 4 } ,
        { userId: 63, quantity: 9 } ,
        { userId: 64, quantity: 1 } ,
        { userId: 65, quantity: 3 } ,
        { userId: 66, quantity: 2 } ,
        { userId: 67, quantity: 9 } ,
        { userId: 68, quantity: 7 } ,
        { userId: 69, quantity: 5 } ,
        { userId: 70, quantity: 3 } ,
        { userId: 71, quantity: 3 } ,
        { userId: 72, quantity: 5 } ,
        { userId: 73, quantity: 1 } ,
        { userId: 74, quantity: 5 } ,
        { userId: 75, quantity: 1 } ,
        { userId: 76, quantity: 1 } ,
        { userId: 77, quantity: 3 } ,
        { userId: 78, quantity: 3 } ,
        { userId: 79, quantity: 1 } ,
        { userId: 80, quantity: 6 } ,
        { userId: 81, quantity: 7 } ,
        { userId: 82, quantity: 5 } ,
        { userId: 83, quantity: 7 } ,
        { userId: 84, quantity: 1 } ,
        { userId: 85, quantity: 4 } ,
        { userId: 86, quantity: 2 } ,
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ShoppingCarts', null, {});
    
  }
};
