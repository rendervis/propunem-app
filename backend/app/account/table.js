const pool = require("../../databasePool");

class AccountTable {
  static storeAccount({ email, passwordHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO account(email, "passwordHash") VALUES($1, $2)`,
        [email, passwordHash],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
  static storeGoogleUser({ email, googleId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO account(email, "googleId") VALUES($1, $2)`,
        [email, googleId],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  ///////check account existence ind db
  static getAccount({ email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT account_id,  "sessionId","passwordHash","googleId"
           FROM account
           WHERE email = $1
          `,
        [email],
        (error, response) => {
          if (error) return reject(error);
          resolve({ account: response.rows[0] });
        }
      );
    });
  }
  static getUserById({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT account_id, email, "sessionId", "passwordHash", "googleId"
           FROM account
           WHERE account_id = $1
          `,
        [id],
        (error, response) => {
          if (error) return reject(error);
          resolve({ user: response.rows[0] });
        }
      );
    });
  }
  static getGoogleUser({ googleId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT account_id, email, "sessionId", "passwordHash", "googleId"
           FROM account
           WHERE "googleId" = $1
          `,
        [googleId],
        (error, response) => {
          if (error) return reject(error);
          resolve(response.rows[0]);
        }
      );
    });
  }

  static updateSessionId({ sessionId, email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE account SET "sessionId" = $1 WHERE email = $2`,
        [sessionId, email],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static updatePassword({ passwordHash, email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE account SET "passwordHash" = $1 WHERE email = $2`,
        [passwordHash, email],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
  static updateEmail({ email, oldEmail }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE account SET email = $1 WHERE email = $2`,
        [email, oldEmail],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

// AccountTable.getUserById({ id: 59 })
//   .then((user) => console.log("AccountTable.getUserById", user))
//   .catch((error) => console.error("error", error));

module.exports = AccountTable;
