const pool = require("../../databasePool");

class UserAccountTable {
  static storeUserAccount({
    accountId,
    firstName,
    surname,
    address,
    city,
    county,
    companyName,
    jobTitle,
    telephone,
    webAddress,
    joinDate,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO useraccount(
                account_id,
                firstname,
                surname,
                address,
                city,
                county,
                company_name,
                job_title,
                telephone,
                web_address,
                joindate)
             VALUES($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11)`,
        [
          accountId,
          firstName,
          surname,
          address,
          city,
          county,
          companyName,
          jobTitle,
          telephone,
          webAddress,
          joinDate,
        ],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "user stored." });
        }
      );
    });
  }
  static updateUserAccount({
    accountId,
    firstName,
    surname,
    address,
    city,
    county,
    companyName,
    jobTitle,
    telephone,
    webAddress,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE useraccount 
            SET firstname = $2, surname = $3, address = $4, city = $5, county = $6,   company_name = $7, job_title = $8,telephone = $9, web_address=$10  
            WHERE 
            account_id = $1 
            `,
        [
          accountId,
          firstName,
          surname,
          address,
          city,
          county,
          companyName,
          jobTitle,
          telephone,
          webAddress,
        ],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "user updated." });
        }
      );
    });
  }

  static getUserAccount({ accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT   
            firstname as "firstName",
            surname,
            address,
            city,
            county,
            company_name as "companyName",
            job_title as "jobTitle",
            telephone,
            web_address as "webAddress"
            FROM useraccount
            WHERE account_id=$1`,
        [accountId],
        (error, response) => {
          if (error) return reject(error);

          console.log(
            "static getUserAccount -->>response.rows",
            response.rows[0]
          );

          resolve({ userInformation: response.rows[0] });
        }
      );
    });
  }
}

///////debug
// UserAccountTable.getUserAccount({ accountId: 54 })
//   .then(({ userInformation }) => console.log({ userInformation }))
//   .catch((error) => console.log("error", error));

module.exports = UserAccountTable;
