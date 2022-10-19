const express = require("express");

const app = express();

const db = require("./utils/database");

const config = require("./config");

const userRouter = require("./users/users.router");

const authRouter = require("./auth/auth.router");

const initModels = require("./models/initModels");



app.use(express.json());

db.authenticate()
  .then(() => {console.log("Database Authenticated")})
  .catch(() => {console.log(err)});

db.sync()
  .then(() => {console.log("Database Synced")})
  .catch(() => {console.log(err)});

initModels();

app.get("/", (req, res) => {

  res.status(200).json({
    message: "OK!",
    users: `localhost: ${config.port}/api/v1/users`
  });

});

app.use("/api/v1/users", userRouter);

app.use("/api/v1/auth", authRouter);

app.listen(config.port, () => {

  console.log(`Server started at port ${config.port}`);

});