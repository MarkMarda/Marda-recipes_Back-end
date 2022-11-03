const express = require("express");

const cors = require("cors");

const app = express();

const db = require("./utils/database");

const config = require("./config");

const userRouter = require("./users/users.router");

const authRouter = require("./auth/auth.router");

const recipesRouter = require("./recipes/recipes.router");

const categoriesRouter = require("./categories/categories.router");

const ingredientsRouter = require("./ingredients/ingredients.router");

const initModels = require("./models/initModels");



app.use(express.json());

app.use(cors());

db.authenticate()
  .then(() => {console.log("Database Authenticated")})
  .catch((err) => {console.log(err)});

db.sync()
  .then(() => {console.log("Database Synced")})
  .catch((err) => {console.log(err)});

initModels();

app.get("/", (req, res) => {

  res.status(200).json({
    message: "OK!",
    users: `localhost: ${config.port}/api/v1/users`
  });

});

app.use("/api/v1/users", userRouter);

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/recipes", recipesRouter);

app.use("api/v1/categories", categoriesRouter);

app.use("/api/v1/ingredients", ingredientsRouter);

app.listen(config.port, () => {

  console.log(`Server started at port ${config.port}`);

});