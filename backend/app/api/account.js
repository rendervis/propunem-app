const { Router } = require("express");

const router = new Router();

const database = {
  users: [
    {
      userId: "1",
      name: "John",
      email: "j@j.com",
      password: "1234",
      joinDate: new Date(),
    },
  ],
};

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  console.log("/login", req.body);
  if (
    email === database.users[0].email &&
    password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error login in!");
  }
});

router.post("/register", (req, res, next) => {
  const { email, password } = req.body;
  console.log("/register", req.body);
  database.users.push({
    email: email,
    password: password,
    joinDate: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.userId === id) {
      found = true;
      return res.json(user);
    }
    if (!found) {
      res.status(400).json("Utilizatorul nu exista!");
    }
  });
});

module.exports = router;
