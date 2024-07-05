const { makeHttpRequest } = require("./callApi");

setInterval(makeHttpRequest, 5000);
process.stdin.resume();
