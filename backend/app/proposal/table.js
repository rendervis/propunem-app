const pool = require("../../databasePool");

class ProposalTable {
  static storeProposalName({ proposalName }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO proposal("proposalName") VALUES($1)`,
        [proposalName],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "proposal name added." });
        }
      );
    });
  }
  static getProposal({ proposalName, accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, "accountId", "proposalName",aboutus,services,approach,offer
           FROM proposal
           WHERE "proposalName"=$1 AND "accountId"=$2
          `,
        [proposalName, accountId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ proposal: response.rows[0] });
        }
      );
    });
  }
}

module.exports = ProposalTable;
