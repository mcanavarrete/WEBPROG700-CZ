// Definition of a class named 'Data' to store students and courses information.
class Data {
    // The constructor initializes the class with two properties: students and courses.
    constructor(students, courses) {
      this.students = students; // Stores an array of student objects.
      this.courses = courses;   // Stores an array of course objects.
    }
}

// Initialize a variable to hold the data collection, initially set to null.
let dataCollection = null;

// Import the file system module to perform file operations.
const fs = require('fs');

// Define an 'initialize' function to load student and course data from JSON files.
function initialize() {
    // Returns a Promise which will be resolved or rejected based on file reading operations.
    return new Promise((resolve, reject) => {
      // Read students data from a JSON file.
      fs.readFile('./data/students.json', 'utf8', (err, studentData) => {
        // If there's an error reading the file, reject the Promise.
        if (err) reject("unable to read students.json");
        else {
          // If student data is successfully read, proceed to read courses data.
          fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {
            // If there's an error reading the file, reject the Promise.
            if (err) reject("unable to read courses.json");
            else {
              // Parse the JSON data and store it in the 'dataCollection' variable.
              dataCollection = new Data(JSON.parse(studentData), JSON.parse(courseData));
              // Resolve the Promise as the data loading process is complete.
              resolve();
            }
          });
        }
      });
    });
}

// Define a function to get all students from the data collection.
function getAllStudents() {
  // Returns a Promise.
  return new Promise((resolve, reject) => {
    // Check if there are no students and reject the Promise if true.
    if (dataCollection.students.length == 0) reject("no results returned");
    else resolve(dataCollection.students); // Otherwise, resolve with the students data.
  });
}

// Define a function to get teaching assistants (TAs) from the student data.
function getTAs() {
  // Returns a Promise.
  return new Promise((resolve, reject) => {
    // Filter the students data to find those who are TAs.
    const TAs = dataCollection.students.filter(student => student.TA);
    // If no TAs are found, reject the Promise.
    if (TAs.length == 0) reject("no results returned");
    else resolve(TAs); // Otherwise, resolve with the TAs data.
  });
}

// Define a function to get all courses from the data collection.
function getCourses() {
  // Returns a Promise.
  return new Promise((resolve, reject) => {
    // Check if there are no courses and reject the Promise if true.
    if (dataCollection.courses.length == 0) reject("no results returned");
    else resolve(dataCollection.courses); // Otherwise, resolve with the courses data.
  });
}

// Export the defined functions to make them available for import in other modules.
module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses
};
