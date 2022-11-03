const router = require("express").Router();

const passport = require("passport");

const categoriesServices = require("./categories.services");

const adminMiddleware = require("../middlewares/role.middleware");
const { session } = require("passport");

require("../middlewares/auth.middleware")(passport);



router.route("/")
  .get(categoriesServices.getAllCategories)
  .post(
    passport.authenticate("jwt", {session: false}),
    adminMiddleware,
    categoriesServices.postCategories
  );

route.route("/:id")
  .get(categoriesServices.getCategoryById)
  .delete(
    passport.authenticate("jwt", {session: false}),
    adminMiddleware,
    categoriesServices.deleteCategories
  );

module.exports = router;



