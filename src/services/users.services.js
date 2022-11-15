const Courses = require("../models/courses.models");
const UsersCourses = require("../models/usersCourses.models");
const Users = require("../models/users.models");
class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "first_name", "last_name", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "first_name", "last_name", "email"],
        include: {
          model: UsersCourses,
          as: "courses",
          attributes: ["id"],

          include: {
            model: Courses,
            as: "courses",
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateData, id) {
    try {
      const result = await Users.update(updateData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCourseUser(data) {
    try {
      const result = await UsersCourses.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
