const router = require("express").Router();

const passport = require("passport");

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
  .patch(usersServices.patchUser)
  .delete(usersServices.deleteUser);

module.exports = router;