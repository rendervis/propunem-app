const Session = require("../account/session");
const { hash } = require("../helper");
const AccountTable = require("../account/table");

const setSession = ({ email, res, sessionId }) => {
  return new Promise((resolve, reject) => {
    let session, sessionString;
    if (sessionId) {
      sessionString = Session.sessionString({ email, id: sessionId });
      setSessionCookie({ sessionString, res });
      resolve({ message: "session restored." });
    } else {
      session = new Session({ email });
      sessionString = session.toString();
      AccountTable.updateSessionId({
        sessionId: session.id,
        email,
      })
        .then(() => {
          setSessionCookie({ sessionString, res });
          resolve({ message: "session created" });
        })
        .catch((error) => reject(error));
    }
  });
};

setSessionCookie = ({ sessionString, res }) => {
  res.cookie("sessionString", sessionString, {
    expire: 2 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,

    // secure: true, // use with https
    // sameSite: "none",
  });
};

const authenticatedAccount = ({ sessionString }) => {
  return new Promise((resolve, reject) => {
    if (!sessionString || !Session.verify(sessionString)) {
      const error = new Error("Invalid session");
      error.statusCode = 400;
      return reject(error);
    } else {
      const { email, id } = Session.parse(sessionString);
      AccountTable.getAccount({ email })
        .then(({ account }) => {
          // console.log("const authenticatedAccount = ", account);
          const authenticated = account.sessionId === id;
          const accountId = account.account_id;

          resolve({ accountId, authenticated });
        })
        .catch((error) => reject(error));
    }
  });
};
module.exports = { setSession, authenticatedAccount };
