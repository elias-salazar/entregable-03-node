const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = require("./users.models");
const Courses = require("./courses.models");

const UsersCourses = db.define("user_courses", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
    field: "user_id",
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Courses,
      key: "id",
    },
    field: "course_id",
  },
});
module.exports = UsersCourses;
