const { Router } = require("express");
const HomePagePdf = require("../render-pdf-on-homepage/query");

const router = new Router();
router.get("/homepage-pdf/:proposalId", (req, res, next) => {
  // console.log("/homepage-pdf", req.params);

  const proposalId = req.params.proposalId;

  HomePagePdf.getHomePagePdf({ proposalId })
    .then(({ offer }) => {
      if (!offer) {
        res.json({ offer: {}, message: "database empty" });
      } else {
        res.json({ offer, message: "offer from database" });
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
