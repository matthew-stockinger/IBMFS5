const express = require("express");
const app = new express();
const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/easter-egg", (request, response) => {
  response.send("You found the easter egg!");
});

const server = app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
