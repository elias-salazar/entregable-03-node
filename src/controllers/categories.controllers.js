const CategoriesServices = require("../services/categories.services");

const createCategory = async (req, res, next) => {
  try {
    const newCategory = req.body;
    const result = await CategoriesServices.add(newCategory);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Check the information you send",
    });
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CategoriesServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Check the information you send",
    });
  }
};

module.exports = {
  createCategory,
  deleteCategory,
};
