const fs = require('fs');

// Read the log file line by line you can just change log file path 
const logFile = 'prod-api-prod-out.log';
const logData = fs.readFileSync(logFile, 'utf-8').split('\n');

// Regular expression pattern to match HTTP status codes
const statusCodePattern = /(\d{3})/;

// Initialize an array to store the extracted status codes
const statusCodes = [];

logData.forEach((logEntry) => {
  // Assuming the log entry format contains the status code
  const match = logEntry.match(statusCodePattern);

  if (match) {
    const statusCode = match[1];
    statusCodes.push(statusCode);
  }
});



let serverError = 0
let notFound = 0
let ok = 0
let notChange = 0
let otherCode = 0

for(let i=0; i<statusCodes.length; i++){
  if(statusCodes[i] == 500){
    serverError++
  }else if(statusCodes[i]==404){
    notFound++
  }else if(statusCodes[i]==200){
    ok++
  }else if(statusCodes[i]==304){
    notChange++
  }else{
    otherCode++
  }
}

// console.log(`statusCode:500 is: ${serverError}`)
// console.log(`status code: 404 is: ${notFound}`)
// console.log(`status code: 200 is : ${ok}`)
// console.log(`status code:304 is: ${notChange}`)
// console.log(`status code: e.g.(202) is :${otherCode}`)
tableData = [
  {NameError: "Server Error" ,statusCode:'500',   count:`${serverError}`},
  {NameError: "Not Found" ,statusCode:"404", count: `${notFound}`},
  {NameError: "Ok" ,statusCode:"200", count: `${ok}`},
  {NameError: "Not Changed" ,statusCode:"304", count: `${notChange}`},
  {NameError: "Other" ,statusCode:"202", count: `${otherCode}`}
]

console.table(tableData)