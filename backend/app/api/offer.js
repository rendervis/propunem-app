const { Router } = require("express");
const OfferTable = require("../offer/table");

const router = new Router();

router.post("/offer", (req, res, next) => {
  console.log("/offer -->>body", req.body);
  const { proposalId } = req.body;

  OfferTable.getOfferCards({ proposalId })
    .then(({ offerCards }) => {
      if (offerCards.length === 0) {
        res.json({ offerCards, message: "database empty" });
      } else {
        res.json({ offerCards, message: "offer from database" });
      }
    })
    .catch((error) => next(error));
});

router.post("/offer/save", (req, res, next) => {
  console.log("/offer/save -->>body", req.body);
  const {
    proposalId,
    idx,
    key,
    textId,
    title,
    secondaryTitle,
    text,
    offerPlan,
  } = req.body;

  OfferTable.storeOfferCard({
    proposalId,
    idx,
    key,
    textId,
    title,
    secondaryTitle,
    text,
    offerPlan,
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});
router.put("/offer/update", (req, res, next) => {
  console.log("/offer/update -->>body", req.body);
  const {
    title,
    secondaryTitle,
    text,
    offerPlan,
    proposalId,
    textId,
  } = req.body;

  OfferTable.updateOfferCard({
    title,
    secondaryTitle,
    text,
    offerPlan,
    proposalId,
    textId,
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});

router.delete("/offer/delete-card", (req, res, next) => {
  const { proposalId, idx } = req.body;
  OfferTable.deleteOfferCard({ proposalId, idx })
    .then(() => {
      res.json({ message: "Successfully deleted." });
    })
    .catch((error) => next(error));
});

module.exports = router;
