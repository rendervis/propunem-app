const { Router } = require("express");
const AboutUsTable = require("../aboutus/table");

const router = new Router();

router.post("/aboutus", (req, res, next) => {
  const { proposalId, textId, aboutText } = req.body;

  AboutUsTable.getAboutUsText({ proposalId })
    .then(({ aboutUsText }) => {
      if (!aboutUsText) {
        AboutUsTable.storeAboutUs({ proposalId, textId, aboutText });
        res.json({ message: "about text was added." });
      } else {
        res.json({ aboutUsText, message: "about text." });
      }
    })
    .catch((error) => next(error));
});

router.post("/aboutus/update", (req, res, next) => {
  const { proposalId, textId, aboutText } = req.body;
  AboutUsTable.updateAboutUsText({ aboutText, proposalId, textId })
    .then(() => {
      res.json({ message: "Successful update!" });
    })
    .catch((error) => next(error));
});

module.exports = router;
