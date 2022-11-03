const ingredientsControllers = require("./ingredients.controllers");



const getAllIngredients = (req, res) => {

  ingredientsControllers.getAllIngredients()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const getIngredientById = (req, res) => {

  const id = req.params.id;

  ingredientsControllers.getIngredientById(id)
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

const postIngredients = (req, res) => {

  const {name, typeId, urlImage} = req.body;

  if (name && typeId) {
    ingredientsControllers.createIngredients({
      name,
      typeId,
      urlImage,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        name: "string",
        typeId: "number",
        urlImage: "string",
      },
    });
  };

};

const patchIngredients = (req, res) => {

  const { name, typeId, urlImage } = req.body;

  const id = req.params.ingredient_id;

  ingredientsControllers.updateIngredients(id, { name, typeId, urlImage })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Ingredient with Id: ${id} edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid Id", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });

};

const deleteIngredients = (req, res) => {

  const id = req.params.ingredient_id;

  ingredientsControllers.deleteIngredients(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid Id", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });

};

const addIngredientsToUser = (req, res) => {

  const userId = req.user.id;

  const {amount} = req. body;

  const ingredientId = req.params.ingredient_id;

  if(amount) {
    ingredientsControllers.addIngredientsToUser({userId, ingredientId, amount})
      .then(data => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Miissing data",
      fields: {
        amount: "string"
      }
    });
  };

};

module.exports = {

  getAllIngredients,
  getIngredientById,
  postIngredients,
  patchIngredients,
  deleteIngredients,
  addIngredientsToUser

};