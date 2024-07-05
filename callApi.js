const axios = require("axios");
const logger = require("./logger");

async function makeHttpRequest() {
  try {
    console.log("App Running:", Date());
    logger.log("App Running:", Date());
  } catch (error) {
    console.error("Error:", error.message);
    logger.log(error.message);
  }
}

module.exports = { makeHttpRequest };
