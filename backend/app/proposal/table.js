const pool = require("../../databasePool");

class ProposalTable {
  static storeProposal({ accountId, proposalName }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO proposal( account_id,proposalname) VALUES($1,$2)`,
        [accountId, proposalName],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "proposal name added." });
        }
      );
    });
  }
  static getProposal({ accountId, proposalName }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT proposal_id, account_id, proposalname
           FROM proposal
           WHERE account_id=$1 AND proposalname=$2
          `,
        [accountId, proposalName],
        (error, response) => {
          if (error) return reject(error);
          resolve({ proposal: response.rows[0] });
        }
      );
    });
  }
}

module.exports = ProposalTable;
