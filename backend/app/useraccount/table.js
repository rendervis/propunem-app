const pool = require("../../databasePool");

class UserAccountTable {
  static storeUserAccount({
    accountId,
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
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
                telephone,
                company_name,
                job_title,
                joindate)
             VALUES($1, $2, $3, $4, $5, $6,$7,$8,$9,$10)`,
        [
          accountId,
          firstName,
          surname,
          address,
          city,
          county,
          telephone,
          companyName,
          jobTitle,
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
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
    accountId,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE useraccount 
            SET firstname = $1, surname = $2, address = $3, city = $4, county = $5, telephone = $6, company_name = $6, job_title = $7   
            WHERE 
            account_id = $8  
            `,
        [
          firstName,
          surname,
          address,
          city,
          county,
          telephone,
          companyName,
          jobTitle,
          accountId,
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
            telephone,
            company_name as "companyName",
            job_title as "jobTitle"
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
// UserAccountTable.getUserAccount({ accountId: 22 })
//   .then(({ userInformation }) => console.log({ userInformation }))
//   .catch((error) => console.log("error", error));

module.exports = UserAccountTable;
