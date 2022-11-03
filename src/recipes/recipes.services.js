const recipesControllers = require("./recipes.controllers");



const getAllRecipes = (req, res) => {

  recipesControllers.getAllRecipes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const getRecipeById = (req, res) => {

  const id = req.params.recipe_id;

  recipesControllers.getRecipeById(id)
    .then(data => {
      if(data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({message: "Invalid Id", id});
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const createRecipe = (req, res)  => {

  const userId = req.user.id;

  const {title, description, urlImage, time, portions, categoryId, origin} = req.body; 
  //Sólo los allowNull
  if(title && desciption && time && portions && categoryId) {
    recipesControllers.createRecipe({
      title, description, urlImage, time, portions, categoryId, origin, userId
    })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(400).json({message: err.message});
      })
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        title: "string",
        description: "string",
        time: "number",
        portions: "number",
        categoryId: "number"
      }
    });
  };

};

const patchRecipe = (req, res) => {

  const id = req.params.recipe_id;

  const {title, desciption, urlImage, time, portions, categoryId, origin} = req.body;

  recipesControllers.updateRecipes(id, {title, desciption, urlImage, time, portions, categoryId, origin})
    .then(data => {
      if(data[0]) {
        req.status(200).json({message: `Recipe with Id: ${id} edited usccesfully`});
      } else {
        res.status(404).json({message: "Invalid Id", id});
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const deleteRecipes = (req, res) => {

  const id = req.params.recipe_id;

  recipesControllers.deleteRecipes(id)
    .then(data => {
      if(data) {
        res.status(204).json();
      } else {
        res.status(404).json({message: "Invalid Id", id});
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

module.exports = {

  getAllRecipes,
  getRecipeById,
  createRecipe,
  patchRecipe, 
  deleteRecipes
  
};

