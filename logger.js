const fs = require("fs");
const path = require("path");

// Define the log directory path
const logDir = path.join(__dirname, "./logs");

// Define the log file path
const logFilePath = path.join(logDir, "app.log");

// Function to write log messages to the file
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;

  // Append the log message to the log file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });
}

module.exports = { log };
