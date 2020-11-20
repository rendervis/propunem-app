const { Router } = require("express");
const SearchBarQuery = require("../search-bar/query");

const router = new Router();

router.get("/search/homepage-accounts", (req, res, next) => {
  /** don't need to set header */
  // res.setHeader("Content-Type", "application/json");
  SearchBarQuery.getHomepageAccounts()
    .then(({ homepageAccounts, message }) => {
      /** not working */
      // res.send({ homepageAccounts, message });
      // res.json({ homepageAccounts, message });
      // console.log("/search/homepage-accounts", homepageAccounts);

      res.status(200).send(JSON.stringify({ homepageAccounts, message }));
    })
    .catch((error) => next(error));
});

module.exports = router;
