const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const coursesRoutes = require("./routes/courses.routes");
const videoRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");
const handleError = require("./middlewares/error.middleware");
const app = express();
const PORT = 8000;
app.use(express.json());
db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("base sincronizada"))
  .catch((error) => console.log(error));
initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.use("/api/v1/", userRoutes);
app.use("/api/v1/", coursesRoutes);
app.use("/api/v1/", videoRoutes);
app.use("/api/v1/", categoriesRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
