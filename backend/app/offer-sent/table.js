const pool = require("../../databasePool");

class OfferSentTable {
  static storeOfferSent({
    proposalId,
    accountId,
    clientName,
    projectTitle,
    selected,
    email,
    downloaded,
    signed,
  }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
                INSERT INTO offer_sent(proposal_id,account_id,client_name,project_title,selected,email,downloaded,signed)
                VALUES ($1, $2, $3, $4, $5,$6,$7,$8)
                `,
        [
          proposalId,
          accountId,
          clientName,
          projectTitle,
          selected,
          email,
          downloaded,
          signed,
        ],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "offer sent" });
        }
      );
    });
  }

  static getOffersSent({ accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        ` SELECT offer_sent_id as "offerSentId",  client_name as "clientName",project_title as "projectTitle",selected,email,downloaded,signed
              FROM offer_sent
              WHERE account_id=$1
              `,
        [accountId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ offersSent: response.rows, message: "offers sent." });
        }
      );
    });
  }

  static deleteOfferSent({ projectTitle, email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE from offer_sent
              WHERE project_title=$1 AND email=$2`,
        [projectTitle, email],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static updateSigned({ offerSentId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE offer_sent
      SET signed = NOT signed
      WHERE offer_sent_id=$1`,
        [offerSentId],
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
// OfferSentTable.deleteOfferSent({
//   projectTitle: "Foto Produs",
//   email: "nina@g.com",
// })
//   .then(() => console.log("deleted"))
//   .catch((error) => console.log("error", error));
module.exports = OfferSentTable;
