const pool = require("../../databasePool");

class AboutUsTable {
  static storeAboutUs({ proposalId, text_id, about_text }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO aboutus( "proposalId",text_id, about_text) VALUES($1,$2,$3)`,
        [proposalId, text_id, about_text],
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
          console.log(
            "static getAboutUsText({ proposalId })-->>",
            response.rows[0]
          );
          resolve({ aboutUsText: response.rows });
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
  static deleteAboutUsText({ proposalId, textId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE from aboutus WHERE "proposalId" = $1 AND text_id=$2`,
        [proposalId, textId],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

module.exports = AboutUsTable;
