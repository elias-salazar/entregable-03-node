const Categories = require("../models/categories.models");

class CategoriesServices {
  static async add(category) {
    try {
      const result = await Categories.create(category);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Categories.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;
