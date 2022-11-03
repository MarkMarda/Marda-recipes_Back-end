const categoriesControllers = require("./categories.controllers");



const getAllCategories = (req, res) => {
  
  categoriesControllers.getAllCategories()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const getCategoryById = (req, res) => {

  const id = req.params.id;

  categoriesControllers.getCategoryById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({message: `Id: ${id}, does not exists`});
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const postCategories = (req, res) => {

  const {name} = req.body;

  if(name) {
    categoriesControllers.createCategories(name)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).json({message: err.message});
      });
  } else {
    res.status(404).json({
      message: "Invalid data",
      fields: {
        name: "string"
      }
    });
  };

};

const deleteCategories = (req, res) => {

  const id = req.params.id;

  categoriesControllers.deleteCategories(id)
    .then(data => {
      if(data) {
        res.status(204).json();
      } else {
        res.status(404).json({message: "Invalid Id"});
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

module.exports = {

  getAllCategories,
  getCategoryById,
  postCategories,
  deleteCategories
  
};