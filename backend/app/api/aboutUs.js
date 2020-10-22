const { Router } = require("express");
const AboutUsTable = require("../aboutus/table");

const router = new Router();

router.post("/aboutus", (req, res, next) => {
  console.log("/aboutus", req.body);
  const { proposalId } = req.body;

  AboutUsTable.getAboutUsText({ proposalId })
    .then(({ aboutUsText }) => {
      console.log(" AboutUsTable.getAboutUsText", aboutUsText);
      if (!aboutUsText) {
        res.json({ message: "no database record." });
      } else {
        res.json({ aboutUsText, message: "about text." });
      }
    })
    .catch((error) => next(error));
});
router.post("/aboutus/save", (req, res, next) => {
  console.log("/aboutus/save -->> req.body", req.body);
  const { proposalId, text_id, about_text } = req.body;

  AboutUsTable.storeAboutUs({ proposalId, text_id, about_text })
    .then(() => {
      res.json({ message: "about text was added." });
    })
    .catch((error) => next(error));
});

router.put("/aboutus/update", (req, res, next) => {
  const { proposalId, textId, aboutText } = req.body;
  AboutUsTable.updateAboutUsText({ aboutText, proposalId, textId })
    .then(() => {
      res.json({ message: "Successful update!" });
    })
    .catch((error) => next(error));
});
router.delete("/aboutus/delete-text", (req, res, next) => {
  const { proposalId, textId } = req.body;
  AboutUsTable.deleteAboutUsText({ proposalId, textId })
    .then(() => {
      res.json({ message: "Successfully deleted!" });
    })
    .catch((error) => next(error));
});

module.exports = router;
