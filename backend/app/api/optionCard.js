const { Router } = require("express");
const OptionCardTable = require("../optioncard/table");

const router = new Router();

router.post("/option-card", (req, res, next) => {
  // console.log("/option-card -->>body", req.body);
  const { title, proposalId } = req.body;

  OptionCardTable.getOptionCard({ title, proposalId })
    .then(({ optionCard }) => {
      if (optionCard.length === 0) {
        const error = new Error("database empty");
        error.statusCode = 409;
        throw error;
      } else {
        res.json({ optionCard, message: "option card from database" });
      }
    })
    .catch((error) => next(error));
});

router.post("/option-card/save", (req, res, next) => {
  // console.log("/option-card/save -->>body", req.body);
  const { title, priceTag, text, textId, key, proposalId } = req.body;

  OptionCardTable.storeOptionCard({
    title,
    priceTag,
    text,
    textId,
    key,
    proposalId,
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});
router.post("/option-card/save-text", (req, res, next) => {
  // console.log("/option-card/save -->>body", req.body);
  const { title, text, textId, key, proposalId } = req.body;

  OptionCardTable.storeOptionCardText({
    title,
    text,
    textId,
    key,
    proposalId,
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});

router.patch("/option-card/update", (req, res, next) => {
  console.log("/option-card/update -->>body", req.body);
  const { title, priceTag, text, textId, proposalId } = req.body;

  OptionCardTable.updateOptionCard({
    title,
    priceTag,
    text,
    textId,
    proposalId,
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});

router.delete("/option-card/delete-card-text", (req, res, next) => {
  console.log("/option-card/delete-card-text", req.body);
  const { title, textId, proposalId } = req.body;
  OptionCardTable.deleteOptionCardText({ title, textId, proposalId })
    .then(() => {
      res.json({ message: "Successfully deleted." });
    })
    .catch((error) => next(error));
});

module.exports = router;
