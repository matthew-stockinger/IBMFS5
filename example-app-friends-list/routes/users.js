const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  res.send(JSON.stringify({ users }, null, 4));
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  res.send(users.filter((user) => user.email === req.params.email));
});

// GET sorted by DOB
router.get("/sorted", (req, res) => {
  console.log("in sorted GET request");
  let sorted = users.sort((a, b) => new Date(a.DOB) - new Date(b.DOB));
  console.log(sorted);
  res.send(sorted);
});

// POST request: Create a new user
router.post("/", (req, res) => {
  const newFriend = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    email: req.query.email,
    DOB: req.query.DOB,
  };
  users.push(newFriend);
  res.send(`The user ${req.query.firstName} has been added.`);
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const currentUserList = users.filter(
    (user) => user.email === req.params.email
  );
  if (currentUserList.length > 0) {
    let currentUser = currentUserList[0];
    updatedUser = { ...currentUser, ...req.query };
    users = [
      ...users.filter((user) => user.email !== req.params.email),
      updatedUser,
    ];
    res.send(`User with email ${req.params.email} updated.`);
  } else {
    res.send("User not found.");
  }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  users = users.filter((user) => user.email !== req.params.email);
  res.send(`User with email ${email} deleted.`);
});

module.exports = router;
