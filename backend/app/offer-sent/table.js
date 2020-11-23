const pool = require("../../databasePool");

class OfferSentTable {
  static storeOfferSent({
    proposalId,
    clientName,
    projectTitle,
    email,
    downloaded,
    signed,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
                INSERT INTO offer_sent(proposal_id,client_name,project_title,email,downloaded,signed)
                VALUES ($1, $2, $3, $4, $5,$6)
                `,
        [proposalId, clientName, projectTitle, email, downloaded, signed],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "offer sent" });
        }
      );
    });
  }

  static deleteOfferSent({ projectTitle, email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE from offer_sent
              WHERE project_title=$1 AND email=$2
              `[(projectTitle, email)],
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
module.exports = OfferSentTable;
