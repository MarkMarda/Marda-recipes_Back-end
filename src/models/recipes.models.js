const {DataTypes} = require("sequelize");

const db = require("../utils/database");

const Categories = require("./categories.models");

const Users = require("./users.models");



const Recipes = db.define("recipes", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    //Min validate
    validate: {
      min: 8
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  urlImage: {
    type: DataTypes.STRING,
    validate: {
      //isUrl: true
    },
    field: "url_image"
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  //las FK se de sequelize tienen ciertas reglas:
  //debe contener ela tabla a la que se hace referencia en singular
  //debe terminar con el sufijo Id
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      key: "id",
      model: Categories
    }
  },
  origin: {
    type: DataTypes.STRING
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }

}, {
  timestamps: false
});

module.exports = Recipes;