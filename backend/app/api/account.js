const { Router } = require("express");
const AccountTable = require("../account/table");

const { hash } = require("../helper");

const Session = require("../account/session");
const { setSession, authenticatedAccount } = require("./helper");

const router = new Router();

router.post("/account/signup", (req, res, next) => {
  const { email, password } = req.body;
  // const userNameHash = hash(userName);
  const passwordHash = hash(password);

  ///check if the Account exists
  AccountTable.getAccount({ email })
    .then(({ account }) => {
      if (!account) {
        ///////add Account
        return AccountTable.storeAccount({
          email,
          passwordHash,
        });
      } else {
        const error = new Error(`Adresa de e-mail a fost deja folosita.`);
        error.statusCode = 409;
        throw error;
      }
    })
    .then(() => {
      ///////start Session
      return setSession({ email, res });
    })
    .then(({ message }) => {
      ///////respond to client
      console.log({ message });
      res.json({ message });
    })
    .catch((error) => next(error));
});

router.post("/account/login", (req, res, next) => {
  const { email, password } = req.body;
  AccountTable.getAccount({ email })
    .then(({ account }) => {
      // console.log("account", account);
      if (account && account.passwordHash === hash(password)) {
        const { sessionId } = account;
        return setSession({ email, res, sessionId });
      } else {
        const error = new Error("Date incorecte.");
        error.statusCode = 409;
        throw error;
      }
    })
    .then(({ message }) => res.json({ message }))
    .catch((error) => next(error));
});

router.get("/account/logout", (req, res, next) => {
  // console.log(" router.get/logout req.cookies", JSON.stringify(req.cookies));
  const { email } = Session.parse(req.cookies.sessionString);
  AccountTable.updateSessionId({
    sessionId: null,
    email,
  })
    .then(() => {
      res.clearCookie("sessionString");
      res.json({ message: "Successful logout" });
    })
    .catch((error) => next(error));
});

router.get("/account/authenticated", (req, res, next) => {
  const { sessionString } = req.cookies;
  console.log("router.get(/authenticated-->sessionString", sessionString);

  authenticatedAccount({ sessionString })
    .then(({ authenticated, accountId }) =>
      res.json({ authenticated, accountId })
    )
    .catch((error) => next(error));
});

router.patch("/account/password-update", (req, res, next) => {
  const { email } = Session.parse(req.cookies.sessionString);
  console.log("req.cookies.sessionString", req.cookies.sessionString);
  const { password } = req.body;

  const passwordHash = hash(password);

  AccountTable.updatePassword({
    passwordHash,
    email,
  })
    .then(() => {
      res.json({ message: "Successful update" });
    })
    .catch((error) => next(error));
});
router.patch("/account/email-update", (req, res, next) => {
  const { email: oldEmail } = Session.parse(req.cookies.sessionString);
  // console.log("req.cookies.sessionString", req.cookies.sessionString);
  const { email } = req.body;
  console.log("oldEmail, email", oldEmail, email);

  AccountTable.updateEmail({
    email,
    oldEmail,
  })
    .then(() => {
      ///////start Session
      return setSession({ email, res });
    })
    .then(({ message }) => {
      ///////respond to client
      console.log({ message });
      res.json({ message: "Successful email update" });
    })
    .catch((error) => next(error));
});

module.exports = router;
