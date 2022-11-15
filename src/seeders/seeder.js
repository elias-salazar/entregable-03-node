const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const UsersCourses = require("../models/usersCourses.models");

// arreglos con la información que se va a plantar
initModels();

const users = [
  {
    first_name: "Ian",
    last_name: "Rosas",
    email: "ian@gmail.com",
    password: "1234",
  },
  {
    first_name: "Alvis",
    last_name: "Echeverria",
    email: "alvis@gmail.com",
    password: "1234",
  },
  {
    first_name: "Carlos",
    last_name: "Tineo",
    email: "carlos@gmail.com",
    password: "1234",
  },
];

const courses = [
  {
    title: "fundamentos desarrollo web",
    description: "descripcion de un curso",
    instructor: "mateo marin",
  },
  {
    title: "react",
    description: "descripcion de un curso",
    instructor: "marcos muñoz",
  },
  {
    title: "node",
    description: "descripcion de un curso",
    instructor: "lucas lombardi",
  },
];

const categories = [
  { name: "fundamentos", courseId: 1 },
  { name: "frontend", courseId: 2 },
  { name: "backend", courseId: 3 },
];

const videos = [
  {
    title: "html",
    url: "https://www.youtube.com/watch?v=cqMfPS8jPys",
    courseId: 1,
  },
  {
    title: " react",
    url: "https://www.youtube.com/watch?v=6Jfk8ic3KVk",
    courseId: 2,
  },
  {
    title: "node",
    url: "https://www.youtube.com/watch?v=i3OdKwuBjeM",
    courseId: 3,
  },
];

const uc = [
  { userId: 1, courseId: 1 },
  { userId: 2, courseId: 2 },
  { userId: 3, courseId: 3 },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
  }, 300);
  setTimeout(() => {
    uc.forEach((r) => UsersCourses.create(r));
  }, 400);
});
