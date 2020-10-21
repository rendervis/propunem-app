const { Router } = require("express");
const ProposalTable = require("../proposal/table");

const router = new Router();

router.post("/proposal/name", (req, res, next) => {
  const { accountId, proposalName } = req.body;
  ProposalTable.getProposal({ accountId, proposalName })
    .then(({ proposal }) => {
      if (!proposal) {
        return ProposalTable.storeProposal({ accountId, proposalName }).then(
          ({ proposalId, message }) => {
            res.json({ proposalId, message });
          }
        );
      } else {
        const error = new Error(
          `Exista deja o propunere pentru ${proposalName}.`
        );
        error.statusCode = 409;
        throw error;
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
