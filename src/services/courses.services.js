const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(updateData, id) {
    try {
      const result = await Courses.update(updateData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async all() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllData() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title"],
        include: [
          {
            model: Categories,
            as: "category",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "video",
            attributes: ["title", "url"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
