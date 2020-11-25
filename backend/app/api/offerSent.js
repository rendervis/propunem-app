const { Router } = require("express");
const OfferSentTable = require("../offer-sent/table");

const router = new Router();

router.post("/offer-sent", (req, res, next) => {
  const { accountId } = req.body;
  OfferSentTable.getOffersSent({ accountId })
    .then(({ offersSent, message }) => {
      res.json({ offersSent, message });
    })
    .catch((error) => next(error));
});

router.delete("/offer-sent/delete-offer", (req, res, next) => {
  // console.log("req.body", req.body);
  const { projectTitle, email } = req.body;
  OfferSentTable.deleteOfferSent({ projectTitle, email })
    .then(() => {
      res.json({ message: "Successfully deleted offer." });
    })
    .catch((error) => next(error));
});

router.patch("/offer-sent/update-signed", (req, res, next) => {
  // console.log("toggled");
  const { offerSentId } = req.body;
  OfferSentTable.updateSigned({ offerSentId })
    .then(() => {
      res.json({ message: "Signed toggled!" });
    })
    .catch((error) => next(error));
});

module.exports = router;
