const { Router } = require("express");
const OurApproachTable = require("../ourapproach/table");

const router = new Router();

router.post("/ourapproach", (req, res, next) => {
  console.log("/ourapproach", req.body);
  const { proposalId } = req.body;

  OurApproachTable.getOurApproachText({ proposalId })
    .then(({ ourApproachText }) => {
      if (!ourApproachText) {
        res.json({ message: "no database record" });
      } else {
        res.json({ ourApproachText, message: "approach text" });
      }
    })
    .catch((error) => next(error));
});

router.post("/ourapproach/save", (req, res, next) => {
  const { proposalId, text_id, approach_text } = req.body;

  OurApproachTable.storeOurApproach({ proposalId, text_id, approach_text })
    .then(({ message }) => {
      console.log("/ourapproach/save", message);
      res.json({ message });
    })
    .catch((error) => next(error));
});

router.put("/ourapproach/update", (req, res, next) => {
  const { approach_text, proposalId, text_id } = req.body;

  OurApproachTable.updateOurApproachText({ approach_text, proposalId, text_id })
    .then(() => {
      res.json({ message: "Successful update!" });
    })
    .catch((error) => next(error));
});

router.delete("/ourapproach/delete-text", (req, res, next) => {
  const { proposalId, text_id } = req.body;
  OurApproachTable.deleteOurApproachText({ proposalId, text_id })
    .then(() => {
      res.json({ message: " Successfully deleted!" });
    })
    .catch((error) => next(error));
});

module.exports = router;
