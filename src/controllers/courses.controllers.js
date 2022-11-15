const CoursesServices = require("../services/courses.services");

const createCourse = async (req, res, next) => {
  try {
    const course = req.body;
    const result = await CoursesServices.create(course);
    res.status(201).json({ message: "course created successfully" });
  } catch (error) {
    next({
      message: "an error has occurred",
      status: 400,
      errorContent: error,
    });
  }
};
const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const { title, description, instructor } = dataUpdate;
    if (title || instructor) {
      return res
        .status(400)
        .json("solo se puede modificar la descripcion de un curso");
    } else {
      const result = await CoursesServices.update(dataUpdate, id);
      res.status(200).json(result);
    }
  } catch (error) {
    next(error);
  }
};
const getAllCourses = async (req, res, next) => {
  try {
    const result = await CoursesServices.all();
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "an error has occurred",
      status: 400,
      errorContent: error,
    });
  }
};
const getAllDataCourses = async (req, res, next) => {
  try {
    const result = await CoursesServices.getAllData();
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "an error has occurred",
      status: 400,
      errorContent: error,
    });
  }
};
module.exports = {
  createCourse,
  updateCourse,
  getAllCourses,
  getAllDataCourses,
};
