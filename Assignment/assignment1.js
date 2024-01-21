// Creating 3 variables that each store an array of strings
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Ma Czarina Alexandria Navarrete",
  "Student Name: mcanavarrete@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

// Creating the "web server simulator" Function - "httpRequest"
// It will accept 2 parameters httpVerb & path
function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manually Testing the "httpRequest" Function
// Expected output: "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/")); 
// Expected output: "200: This assignment was prepared by Ma Czarina Alexandria Navarrete"
console.log(httpRequest("GET", "/about")); 
// Add additional tests including a 404 error test
console.log(httpRequest("PUT", "/")); // Expected output: "404: Unable to process PUT request for /"

// Automating the Tests by creating an "automateTests" Function

// Utility function to generate a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//Define our new "automateTests" function
function automateTests() {
  //defining testVerbs and testPaths array
  const testVerbs = ["GET", "POST"];
  const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
  
  //Define another function called randomRequest (accepts 0 parameters)
  function randomRequest() {
    // Declaring randVerb & randPath arrays
    const randVerb = testVerbs[getRandomInt(testVerbs.length)]; // A random value from the testVerbs array
    const randPath = testPaths[getRandomInt(testPaths.length)]; // A random value from the testPaths array 
    console.log(httpRequest(randVerb, randPath));
  }
  //Use the setInterval function to repeat this function over and over again every 1 second
  setInterval(randomRequest, 1000);
}

// Invoke the "automateTests" function 
automateTests();
