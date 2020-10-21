const pool = require("../../databasePool");

class ProposalTable {
  static storeProposal({ accountId, proposalName }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO 
        proposal( account_id,proposal_name) VALUES($1,$2) RETURNING proposal_id`,
        [accountId, proposalName],
        (error, response) => {
          if (error) return reject(error);
          const proposalId = response.rows[0].proposal_id;

          resolve({ message: "proposal name added.", proposalId });
        }
      );
    });
  }
  static getProposal({ accountId, proposalName }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT proposal_id, account_id, proposal_name
           FROM proposal
           WHERE account_id=$1 AND proposal_name=$2
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
