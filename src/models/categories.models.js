const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Categories = db.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
      field: "course_id",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Categories;
