const Users = require("./users.models");
const Courses = require("./courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");
const UsersCourses = require("./usersCourses.models");

const initModels = () => {
  Videos.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" });

  Categories.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
  Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" });

  UsersCourses.belongsTo(Users, { as: "users", foreignKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "courses", foreignKey: "user_id" });

  UsersCourses.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "users", foreignKey: "course_id" });
};
module.exports = initModels;
