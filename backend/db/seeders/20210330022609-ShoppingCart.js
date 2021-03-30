'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('ShoppingCarts', [
        {
          userId: 1,
          quantity: 1,
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ShoppingCarts', null, {});
    
  }
};
