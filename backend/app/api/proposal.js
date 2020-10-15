const { Router } = require("express");
const ProposalTable = require("../proposal/table");

const router = new Router();

router.post("/name", (req, res, next) => {
  const { proposalName, accountId } = req.body;
  ProposalTable.getProposal({ proposalName, accountId })
    .then(({ proposal }) => {
      if (!proposal) {
        ProposalTable.storeProposalName({ proposalName });
        res.json({ message: "proposal name added." });
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
