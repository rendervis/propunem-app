const pool = require("../../databasePool");

class SearchBarQuery {
  static getHomepageAccounts() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT distinct  useraccount.account_id as "accountId", company_name as "companyName", firstname as "firstName", surname, branding_text as "brandingText"
        FROM
            useraccount  
            left outer join branding_declaration  
                on  useraccount.account_id = branding_declaration.account_id
        ORDER BY surname;
        `,
        (error, response) => {
          if (error) return reject(error);
          resolve({
            message: "accounts for homepage",
            homepageAccounts: response.rows,
          });
        }
      );
    });
  }
}

///////debug
// SearchBarQuery.getDefaultAccounts()
//   .then(({ defaultAccounts }) =>
//     console.log("homepageAccounts", homepageAccounts)
//   )
//   .catch((error) => console.log("error", error));

module.exports = SearchBarQuery;
