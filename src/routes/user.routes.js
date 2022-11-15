const { Router } = require("express");

const {
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  addCourseForUser,
} = require("../controllers/users.controllers");

const router = Router();

//* user by ID

router.get("/users/:id", getUserById);

//* user with courses
router.get("/users/:id/courses", getUserWithCourses);

//* create user
router.post("/users", createUser);

//*update user
router.put("/users/:id", updateUser);

//add courses
router.post("/users/:userId/courses", addCourseForUser);

module.exports = router;
