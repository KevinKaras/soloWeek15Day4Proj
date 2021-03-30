'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCartListing = sequelize.define('ShoppingCartListing', {
    id: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {});
  ShoppingCartListing.associate = function(models) {
    // associations can be defined here
  };
  return ShoppingCartListing;
};