const { Router } = require("express");
const BrandingDeclarationTable = require("../branding-declaration/table");

const router = new Router();

router.post("/branding-declaration", (req, res, next) => {
  // console.log("req.body", req.body);
  const { accountId } = req.body;
  BrandingDeclarationTable.getBrandingDeclaration({ accountId })
    .then(({ brandingDeclarationDB }) => {
      if (!brandingDeclarationDB) {
        res.json({ message: "no database record" });
      } else {
        res.json({
          brandingDeclarationDB,
          message: "Branding Declaration Text",
        });
      }
    })
    .catch((error) => next(error));
});

router.post("/branding-declaration/save", (req, res, next) => {
  // console.log("req.body/save", req.body);
  const { accountId, text_id, text } = req.body;
  BrandingDeclarationTable.storeBrandingDeclaration({
    accountId,
    text_id,
    text,
  })
    .then(() => {
      res.json({ message: "Branding declaration was added." });
    })
    .catch((error) => next(error));
});

router.put("/branding-declaration/update", (req, res, next) => {
  const { accountId, text_id, text } = req.body;
  BrandingDeclarationTable.updateBrandingDeclaration({
    accountId,
    text_id,
    text,
  })
    .then(() => {
      res.json({ message: "Successful update!" });
    })
    .catch((error) => next(error));
});

module.exports = router;
