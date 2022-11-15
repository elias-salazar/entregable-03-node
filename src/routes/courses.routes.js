const { Router } = require("express");
const router = Router();
const {
  createCourse,
  updateCourse,
  getAllCourses,
  getAllDataCourses,
} = require("../controllers/courses.controllers");

//* create course
router.post("/courses", createCourse);

//* update course
router.put("/courses/:id", updateCourse);

// get all
router.get("/courses", getAllCourses);
module.exports = router;

// get all with data

router.get("/alldataCourses", getAllDataCourses);
