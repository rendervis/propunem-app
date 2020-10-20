const pool = require("../../databasePool");

class AboutUsTable {
  static storeAboutUs({ proposalId, textId, aboutText }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO aboutus( "proposalId",text_id, about_text) VALUES($1,$2,$3)`,
        [proposalId, textId, aboutText],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "about us text added." });
        }
      );
    });
  }

  static getAboutUsText({ proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT "proposalId",text_id, about_text
           FROM aboutus
           WHERE "proposalId"=$1 
          `,
        [proposalId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ aboutUsText: response.rows[0] });
        }
      );
    });
  }
  static updateAboutUsText({ aboutText, proposalId, textId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE aboutus SET about_text = $1 WHERE "proposalId" = $2 AND text_id=$3`,
        [aboutText, proposalId, textId],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

module.exports = AboutUsTable;
