'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Listings', [
        {
          userId: 1,
          productName: "Morant Stereo",
          description: "300 watts, Satin black, polished aluminum",
          price: 2500
        },
        {
          userId: 2,
          productName: "Stella Artois",
          description: "Crisp refreshing beverage",
          price: 5,
        },
        {
          userId: 3,
          productName: "Monocular telescope 35x40mm Piece",
          description: "A living room piece for those who have more money than they know what to do with",
          price: 21000,
        },
        {
          userId: 4,
          productName: "Dual Artificial Plant Decor Vases ",
          description: "Two Vases 2.5 feet in height, great for accenting television sets",
          price: 4000,
        }
      ], {})
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Listings', null, {});
    
  }
};
