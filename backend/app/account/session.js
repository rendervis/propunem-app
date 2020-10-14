const { v4: uuid } = require("uuid");
const { hash } = require("../helper");

const SEPARATOR = "|";
class Session {
  constructor({ email }) {
    this.email = email;
    this.id = uuid();
  }
  static sessionString({ email, id }) {
    const accountData = Session.accountData({ email, id });
    return `${accountData}${SEPARATOR}${hash(accountData)}`;
  }

  toString() {
    const { email, id } = this;
    return Session.sessionString({ email, id });
  }

  static accountData({ email, id }) {
    return `${email}${SEPARATOR}${id}`;
  }

  static parse(sessionString) {
    const sessionData = sessionString.split(SEPARATOR);
    return {
      email: sessionData[0],
      id: sessionData[1],
      sessionHash: sessionData[2],
    };
  }

  static verify(sessionString) {
    const { email, id, sessionHash } = Session.parse(sessionString);
    const accountData = Session.accountData({ email, id });
    return hash(accountData) === sessionHash;
  }
}

///////debug
// const foo = new Session({ userName: "foo" });
// const fooString = foo.toString();
// console.log(Session.parse(fooString));
// const fake = `admin${fooString}`;
// console.log(Session.verify(fake));

///////nodemon server/app/account/session.js

module.exports = Session;
