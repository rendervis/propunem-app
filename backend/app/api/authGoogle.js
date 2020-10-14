// Dependencies
const { Router } = require("express");
const passport = require("passport");

//Init router
const router = new Router();

//Initial auth call to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//Callback - Send user to /profil/profil or back to auth screen-
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/profil/profil");
});

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/profil/profil",
//     failureRedirect: "/",
// })
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/current_user", (req, res, next) => {
  console.log("Authenticated?: " + req.isAuthenticated());
  // console.log("\n\nReq session: " + req.session.passport);

  if (req.isAuthenticated()) {
    res.send(
      JSON.stringify({
        user: req.user,
        authenticated: req.isAuthenticated(),
        message: "Conectare reusita!",
      })
    );
    return next();
  } else {
    const error = new Error(`Nu esti conectat!..`);
    error.statusCode = 409;
    res.send(
      JSON.stringify({
        message: "Nu esti conectat!",
        authenticated: req.isAuthenticated(),
      })
    );

    return next(error);
  }
});

module.exports = router;
