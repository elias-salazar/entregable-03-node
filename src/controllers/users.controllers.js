const UserServices = require("../services/users.services");
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: " ",
    });
  }
};
const getUserWithCourses = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinCourses(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: " ",
    });
  }
};
const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = req.body;

    const result = await UserServices.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Check the information you send",
    });
  }
};
const updateUser = async (req, res, next) => {
  try {
    const dataUpdate = req.body;
    const { first_name, last_name, password, email } = dataUpdate;
    const { id } = req.params;
    if (!email) {
      const result = await UserServices.update(dataUpdate, id);
      res.status(200).json(result);
    } else {
      return res.status(400).json("no se puede modificar el email");
    }
  } catch (error) {
    next(error);
  }
};
const addCourseForUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { courseId } = req.body;
    const data = { userId, courseId };
    console.log(userId, courseId);
    const result = await UserServices.addCourseUser(data);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Check the information you send",
    });
  }
};

module.exports = {
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  addCourseForUser,
};
