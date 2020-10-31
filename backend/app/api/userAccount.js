const { Router } = require("express");
const UserAccountTable = require("../useraccount/table");

const router = new Router();

router.post("/user", (req, res, next) => {
  console.log("/user -->>body", req.body);
  const { accountId } = req.body;

  UserAccountTable.getUserAccount({ accountId })
    .then(({ userInformation }) => {
      if (!userInformation) {
        res.json({ userInformation, message: "database empty" });
      } else {
        res.json({ userInformation, message: "user from database" });
      }
    })
    .catch((error) => next(error));
});

router.post("/user/save", (req, res, next) => {
  console.log("/user/save -->>body", req.body);
  const {
    accountId,
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
  } = req.body;

  UserAccountTable.storeUserAccount({
    accountId,
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
    joinDate: new Date(),
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});

router.put("/user/update", (req, res, next) => {
  console.log("/offer/update -->>body", req.body);
  const {
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
    accountId,
  } = req.body;

  UserAccountTable.updateUserAccount({
    firstName,
    surname,
    address,
    city,
    county,
    telephone,
    companyName,
    jobTitle,
    accountId,
  })
    .then(({ message }) => {
      res.json({ message });
    })
    .catch((error) => next(error));
});

module.exports = router;
