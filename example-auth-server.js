const express = require("express");
const jsonwebtoken = require("jsonwebtoken");

const myapp = express();
// allow returning JSON responses by API methods.
myapp.use(express.json());

const JWT_SECRET = "aVeryVerySecretString";

// POST API endpoint
myapp.post("/signin", (req, res) => {
  // never do this!  This is hardcoding the POSTed user auth credentials!
  const { uname, pwd } = req.body;

  // also not secure:
  if (uname === "user" && pwd === "password") {
    return res.json({
      token: jsonwebtoken.sign({ user: "user" }, JWT_SECRET),
    });
  } else {
    return res
      .status(401)
      .json({ message: "Invalid username and/or password" });
  }
});

// GET API endpoint for the /employees API
myapp.get("/employees", (req, res) => {
  const tkn = req.header("Authorization");
  if (!tkn) {
    return res.status(401).send("No Token");
  }
  // authorization header always starts with 'Bearer '
  // thus the token is known as the Bearer token.
  else if (tkn.startsWith("Bearer ")) {
    var tokenValue = tkn.slice(7, tkn.length).trimStart();
  }
  const verificationStatus = jsonwebtoken.verify(
    tokenValue,
    "aVeryVerySecretString"
  );
  if (verificationStatus.user === "user") {
    return res
      .status(200)
      .json({ message: "Access Successful to Employee Endpoint" });
  } else {
    return res
      .status(401)
      .json({ message: "Please login to access this resource." });
  }
});

// start server on port 5000
myapp.listen(5000, () => {
  console.log("API server is localhost:5000");
});
