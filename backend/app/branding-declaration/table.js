const pool = require("../../databasePool");

class BrandingDeclarationTable {
  ///////
  static storeBrandingDeclaration({ accountId, text_id, text }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO branding_declaration 
                (account_id, text_id, branding_text) 
                VALUES($1, $2, $3)`,
        [accountId, text_id, text],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
  ///////
  static getBrandingDeclaration({ accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT text_id, branding_text as text
        FROM branding_declaration
        WHERE account_id=$1
        `,
        [accountId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ brandingDeclarationDB: response.rows });
        }
      );
    });
  }
  ///////
  static updateBrandingDeclaration({ accountId, text_id, text }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE branding_declaration 
              SET branding_text=$3
              WHERE account_id=$1 AND text_id=$2
               `,
        [accountId, text_id, text],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

// BrandingDeclarationTable.storeBrandingDeclaration({
//   accountId: 53,
//   text_id: 1,
//   text: "Mare dar din db... test.",
// })
//   // .then((user) => console.log("AccountTable.getUserById", user))
//   .catch((error) => console.error("error", error));

module.exports = BrandingDeclarationTable;
