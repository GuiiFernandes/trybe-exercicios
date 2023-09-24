module.exports = (sequelize, DataTypes) => {
  const BookModel = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    underscored: true,
    tableName: 'books',
  });
  return BookModel;
};