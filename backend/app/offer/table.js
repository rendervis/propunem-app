const pool = require("../../databasePool");

class OfferTable {
  static storeOfferCard({
    proposalId,
    idx,
    key,
    textId,
    title,
    secondaryTitle,
    text,
    offerPlan,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO offer(proposal_id, idx,"offerKey","textId",title, "secondaryTitle", text, "offerPlan")
                VALUES($1, $2, $3, $4, $5, $6,$7,$8)`,
        [proposalId, idx, key, textId, title, secondaryTitle, text, offerPlan],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "offer card stored." });
        }
      );
    });
  }

  static updateOfferCard({
    title,
    secondaryTitle,
    text,
    offerPlan,
    proposalId,
    textId,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE offer 
        SET title = $1, "secondaryTitle" = $2, text = $3, "offerPlan" = $4 
        WHERE 
        proposal_id = $5  AND "textId" = $6
        `,
        [title, secondaryTitle, text, offerPlan, proposalId, textId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "offer card updated." });
        }
      );
    });
  }

  static getOfferCards({ proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT proposal_id, idx,"offerKey" as key,  "textId", title, "secondaryTitle", text, "offerPlan"
        FROM offer
        WHERE proposal_id=$1`,
        [proposalId],
        (error, response) => {
          if (error) return reject(error);

          // console.log("static getOfferCards -->>response.rows", response.rows);

          resolve({ offerCards: response.rows });
        }
      );
    });
  }

  static deleteOfferCard({ proposalId, idx }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE from offer
              WHERE proposal_id=$1 AND idx=$2`,
        [proposalId, idx],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

///////debug
// OfferTable.getOfferCards({ proposalId: 158 })
//   .then(({ offerCards }) => console.log("OfferTable.getOfferCards", offerCards))
//   .catch((error) => console.log("error", error));

module.exports = OfferTable;
