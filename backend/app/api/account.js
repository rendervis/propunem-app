const { Router } = require("express");

const router = new Router();

const database = {
  users: [
    {
      userId: "1",
      username: "John",
      email: "j@j.com",
      password: "1234",
      joinDate: new Date(),
    },
  ],
};

router.post("/inregistrare", (req, res, next) => {
  const { email, password } = req.body;
  if (
    email === database.users[0].email &&
    password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error login in!");
  }
});

module.exports = router;
