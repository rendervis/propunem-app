// Dependencies
const { Router } = require("express");
const passport = require("passport");

const isProduction = process.env.NODE_ENV === "production";

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
router.get(
  "/google/callback",
  passport.authenticate(
    "google"
    // , {
    //   failureRedirect: "/account/login",
    //   successRedirect: "/profil/profil",
    // }
  ),
  (req, res, next) => {
    // console.log("req.user", req.user);
    // const { email } = req.user;
    res.redirect(`/profil/profil`);
    return res.send(
      JSON.stringify({
        googleUser: req.user,
        authenticated: req.isAuthenticated(),
        message: "Conectare reusita!",
      })
    );
  }
);

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
        googleUser: req.user,
        authenticated: req.isAuthenticated(),
        message: "Conectare reusita!",
      })
    );
  } else {
    const error = new Error(`Nu esti conectat prin google!..`);
    error.statusCode = 409;
    res.send(
      JSON.stringify({
        message: "Nu esti conectat prin google!..",
        authenticated: req.isAuthenticated(),
      })
    );

    return next(error);
  }
});

module.exports = router;
