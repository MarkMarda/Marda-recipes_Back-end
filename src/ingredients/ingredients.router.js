const router = require('express').Router();

const passport = require('passport');

const adminMiddleware = require('../middlewares/role.middleware');

const ingredientsServices = require('./ingredients.services');

require('../middlewares/auth.middleware')(passport);



//? /ingredients 
//? /ingredients/:ingredient_id

router.route("/")
  .get(ingredientsServices.getAllIngredients)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminMiddleware,
    ingredientsServices.postIngredients
  );

router.route("/:ingredient_id")
  .get(ingredientsServices.getIngredientById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminMiddleware,
    ingredientsServices.patchIngredients
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminMiddleware,
    ingredientsServices.deleteIngredients
  );

router.post("/:ingredient_id/add_to_user",
  passport.authenticate("jwt", { session: false }),
  ingredientsServices.addIngredientsToUser
);

module.exports = router;