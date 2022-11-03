const {DataTypes} = require("sequelize");

const db = require("../utils/database");

const Types = require("./types.models");



const Ingredients = db.define("ingredients", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "type_id",
    references: {
      key: "id",
      model: Types
    }
  },
  //en la base de datos se almacena el url en string
  urlImage: {
    type: DataTypes.STRING,
    field: "url_image",
    validate: {
      //isUrl: true
    }
  }

}, {
  timestamps: false
});

module.exports = Ingredients;