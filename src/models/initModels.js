const Categories = require("./categories.models");

const Ingredients = require("./ingredients.models");

const Instruntions = require("./instructions.models");

const RecipesIngredients = require ("./recipes_ingredients.models");

const Recipes = require("./recipes.models");

const Types = require("./types.models");

const UsersIngredients = require("./users_ingredients.models");

const UsersRecipes = require("./users_recipes.models");

const Users = require("./users.models");




const initModels = () => {

  //Users 1:M Recipes
  Users.hasMany(Recipes);
  Recipes.belongsTo(Users);

  //Users 1:M UserRecipes
  Users.hasMany(UsersRecipes);
  UsersRecipes.belongsTo(Users);

  //Recipes 1:M UsersRecipes => relación muchos a muchos 1:M:1
  Recipes.hasMany(UsersRecipes);
  UsersRecipes.belongsTo(Recipes);

  //users 1:M UsersIngredients
  Users.hasMany(UsersIngredients);
  UsersIngredients.belongsTo(Users);

  //Ingredients 1:M UsersIngredients
  Ingredients.hasMany(UsersIngredients);
  UsersIngredients.belongsTo(Ingredients);

  //Categories 1:M Recipes 
  Categories.hasMany(Recipes);
  Recipes.belongsTo(Categories);

  //Types 1:M Ingredients
  Types.hasMany(Ingredients);
  Ingredients.belongsTo(Types);

  //Recipes 1:M RecipesIngredients
  Recipes.hasMany(RecipesIngredients);
  RecipesIngredients.belongsTo(Recipes);

  //Ingredients 1:M RecipesIngredients
  Ingredients.hasMany(RecipesIngredients);
  RecipesIngredients.belongsTo(Ingredients);

  //Recipes 1:M Instructions
  Recipes.hasMany(Instruntions);
  Instruntions.belongsTo(Recipes);

};

module.exports = initModels;