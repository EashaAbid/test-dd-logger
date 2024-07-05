const { makeHttpRequest } = require("./callApi");
const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  setInterval(makeHttpRequest, 5000);
  //   process.stdin.resume();
});
