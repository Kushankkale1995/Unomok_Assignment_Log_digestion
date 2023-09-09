const fs = require("fs");
// replace with your log file 
const filePath = "api-dev-out.log";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Process the file data here
  // console.log(data); // This will print the file contents to the console

  // Define the endpoint you want to search for
  const endpoint = "HTTP/1.1"; // Replace with the endpoint you're interested in

  // Create a regular expression to match the endpoint globally (i.e., all occurrences)
  const regex = new RegExp(endpoint, "g");

  // Use the `match` method with the regex to find all occurrences
  const occurrences = data.match(regex);

  if (occurrences) {
    console.log(
      `Endpoint '${endpoint}' was called ${occurrences.length} times.`
    );
  } else {
    console.log(`Endpoint '${endpoint}' was not found in the file.`);
  }






  

});

