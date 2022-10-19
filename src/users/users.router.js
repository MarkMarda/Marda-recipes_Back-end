const router = require("express").Router();

const passport = require("passport");

const adminValidate = require("../middlewares/role.middleware");

const usersServices = require("./users.services");

require("../middlewares/auth.middleware")(passport);


router.get("/", usersServices.getAllUsers);

router.route("/me")
  .get(
    passport.authenticate("jwt", {session: false}),
    usersServices.getMyUser
  )
  .patch(
    passport.authenticate("jwt", {session: false}),
    usersServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", {session: false}),
    usersServices.deleteMyUser
  );

router.route("/:id")
  .get(usersServices.getUserById)
  .patch(
    passport.authenticate("jwt", {session: false}),
    adminValidate,
    usersServices.patchUser
    )
  .delete(
    passport.authenticate("jwt", {session: false}),
    adminValidate,
    usersServices.deleteUser
    );

module.exports = router; 