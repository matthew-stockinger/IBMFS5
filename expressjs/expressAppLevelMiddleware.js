const express = require("express");
const app = new express();

// all requests are filtered through this middleware.
// if password is passed in URL query, then next() will pass the request to the
// proper endpoint.
app.use(function (req, res, next) {
  if (req.query.password !== "pwd123") {
    return res.status(402).send("This user cannot login ");
  }
  console.log("Time:", Date.now());
  next();
});

app.get("/home", (req, res) => {
  return res.send("Hello World!");
});

app.listen(3333, () => {
  console.log(`listening at http://localhost:3333`);
});
