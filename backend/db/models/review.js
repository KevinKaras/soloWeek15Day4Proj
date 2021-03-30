'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    textBody: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Listing, { foreignKey: "listingId"})
  };
  return Review;
};