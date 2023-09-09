const fs = require('fs');

// Define an object to store API calls per minute
const apiCallsPerMinute = {};

// Read the log file line by line
const logFile = 'api-dev-out.log';
const logData = fs.readFileSync(logFile, 'utf-8').split('\n');

logData.forEach((logEntry) => {
  // Assuming the log entry format contains the timestamp
  const timestampMatch = logEntry.match(/\[(.*?)\]/);

  if (timestampMatch) {
    const timestampStr = timestampMatch[1];
    const timestamp = new Date(timestampStr);

    // Get the minute in YYYY-MM-DD HH:mm format
    const minute = timestamp.toTimeString().slice(0, 16);

    // Count API calls per minute
    if (apiCallsPerMinute[minute]) {
      apiCallsPerMinute[minute]++;
    } else {
      apiCallsPerMinute[minute] = 1;
    }
  }
});

// Display the results
console.log("API Calls per Minute:");
for (const minute in apiCallsPerMinute) {
  console.log(`${minute}: ${apiCallsPerMinute[minute]} API calls`);

}

