const pool = require("../../databasePool");

class OurApproachTable {
  static storeOurApproach({ text_id, approach_text }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO ourapproach(
            text_id,approach_text)
            VALUES($1,$2)`,
        [text_id, approach_text],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "approach text added." });
        }
      );
    });
  }

  static getOurApproachText({ proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT proposal_id, text_id,approach_text
              FROM ourapproach
              WHERE proposal_id=$1
              `,
        [proposalId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ ourApproachText: response.rows });
        }
      );
    });
  }

  static updateOurApproachText({ approach_text, proposalId, text_id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE ourapproach
              SET approach_text=$1
              WHERE proposal_id=$2 AND text_id=$3
              `,
        [approach_text, proposalId, text_id],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static deleteOurApproachText({ proposalId, text_id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          DELETE from ourapproach 
          WHERE proposal_id=$1 AND text_id=$2
          `,
        [proposalId, text_id],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

module.exports = OurApproachTable;
