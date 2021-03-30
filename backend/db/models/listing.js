'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, { foreignKey: "userId"}),
    Listing.hasMany(models.Review, { foreignKey: "listingId"})
  };
  return Listing;
};