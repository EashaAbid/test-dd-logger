const axios = require("axios");
const logger = require("./logger");

async function makeHttpRequest() {
  try {
    const response = await axios.get("https://api.digitalocean.com/v2");

    if (response.status !== 200) {
      throw new Error(
        `HTTP request to DigitalOcean failed with status code ${response.status}`
      );
    }

    logger.log(`HTTP request successful: ${response.data.message}`);
    console.log("Response:", response.data.message);
  } catch (error) {
    logger.log(error.message);
    console.error("Error:", error.message);
  }
}

module.exports = { makeHttpRequest };
