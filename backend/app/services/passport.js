const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = require("../../../environment_config/keys");
const AccountTable = require("../account/table");

//Serialization
passport.serializeUser((user, done) => {
  console.log("passport.serializeUser", user);

  return done(null, user.accountId);
});

passport.deserializeUser(async (id, done) => {
  console.log("passport.deserializeUser id", id);

  const user = await AccountTable.getUserById({ id });
  return done(null, user);
});

//Authenticate with Google and get users data
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",

      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("new GoogleStrategy  -->", profile.displayName);

      const existingUser = await AccountTable.getGoogleUser({
        googleId: profile.id,
      });
      if (Object.keys(existingUser).length === 0) {
        const user = await AccountTable.storeGoogleUser({
          email: profile.emails[0].value,
          googleId: profile.id,
        });
        console.log("user", user);
        return done(null, user);
      }

      return done(null, existingUser);
      console.log("existingUser", typeof existingUser);
    }
  )
);

// AccountTable.getGoogleUser({ googleId: profile.id }).then(({ user }) => {
//   if (user) {
//     // console.log("AccountTable.getGoogleUser", user);
//     done(null, user);
//   } else {
//     AccountTable.storeGoogleUser({
//       email: profile.emails[0].value,
//       googleId: profile.id,
//     }).then(({ user }) => done(null, user));
//   }
// });
