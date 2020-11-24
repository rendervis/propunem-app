const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = require("../../../environment_config/keys");
const AccountTable = require("../account/table");

//Serialization
passport.serializeUser((user, done) => {
  console.log("passport.serializeUser", user.account_id);
  done(null, user.account_id);
});

passport.deserializeUser((id, done) => {
  console.log("passport.deserializeUser id", id);
  AccountTable.getUserById({ id }).then(({ user }) => done(null, user));
});

//Authenticate with Google and get users data
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("new GoogleStrategy  -->");

      const existingUser = await AccountTable.getGoogleUser({
        googleId: profile.id,
      });
      if (existingUser) {
        // console.log("AccountTable.getGoogleUser", user);
        return done(null, existingUser);
      } else {
        const user = await AccountTable.storeGoogleUser({
          email: profile.emails[0].value,
          googleId: profile.id,
        }).then(() => {
          return done(null, user);
        });
      }
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
