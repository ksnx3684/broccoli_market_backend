'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Users, { 
        targetKey: 'user_id', 
        foreignKey: 'user_id', 
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Products, { 
        targetKey: 'product_id', 
        foreignKey: 'product_id', 
        onDelete: "CASCADE",
      });
    }
  }
  Products.init({
    likes_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      created_at: {
        allowNull: false,
        defaultValue: DataTypes.fn("now"),
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: DataTypes.fn("now"),
        type: DataTypes.DATE,
      },
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};