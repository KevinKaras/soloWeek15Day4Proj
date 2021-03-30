'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    

      
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          listingId: 1,
          title: "Great Stereo!",
          textBody: "Superb stereo, hooked it up to my 12 inch subs and now I cannot hear anything, I may have to go to the hospital. 3/10, would recommend."
        },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
