const Categories = require("../models/categories.models");



const getAllCategories = async() => {

  const data = await Categories.findAll();

  return data;

};

const getCategoryById = async(id) => {

  const data = await Categories.findOne({
    where: {id}
  });

  return data;

};

const createCategories = async(name) => {

  const data = await Categories.create({
    name
  });

  return data;

};

const deleteCategories = async(id) => {

  const data = await Categories.destroy({
    where: {id}
  });

  return data;
  
};

module.exports = {

  getAllCategories,
  getCategoryById,
  createCategories,
  deleteCategories
  
};