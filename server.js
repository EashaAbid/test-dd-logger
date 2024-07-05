const express = require("express");
const bodyParser = require("body-parser");
const { log } = require("./logger");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/log", (req, res) => {
  const { message } = req.body;
  if (message) {
    log(message);
    res.status(200).send("Log message received");
  } else {
    res.status(400).send("No log message provided");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
