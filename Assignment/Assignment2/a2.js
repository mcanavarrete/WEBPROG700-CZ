// Import the 'collegeData' module, which contains functions to handle college data.
const collegeData = require('./modules/collegeData');

// Call the 'initialize' function from the 'collegeData' module. This function loads student and course data.
collegeData.initialize().then(() => {
  // This block executes if the initialization is successful.
  console.log("Initialization Successful");

  // Retrieve all students using 'getAllStudents' function from the 'collegeData' module.
  collegeData.getAllStudents().then((students) => {
    // This block executes if student data retrieval is successful.
    console.log(`Successfully retrieved ${students.length} students`);
  }).catch((err) => {
    // This block catches and logs any errors that occur during student data retrieval.
    console.log(err);
  });

  // Retrieve all teaching assistants (TAs) using 'getTAs' function from the 'collegeData' module.
  collegeData.getTAs().then((TAs) => {
    // This block executes if TA data retrieval is successful.
    console.log(`Successfully retrieved ${TAs.length} TAs`);
  }).catch((err) => {
    // This block catches and logs any errors that occur during TA data retrieval.
    console.log(err);
  });

  // Retrieve all courses using 'getCourses' function from the 'collegeData' module.
  collegeData.getCourses().then((courses) => {
    // This block executes if course data retrieval is successful.
    console.log(`Successfully retrieved ${courses.length} courses`);
  }).catch((err) => {
    // This block catches and logs any errors that occur during course data retrieval.
    console.log(err);
  });

}).catch((err) => {
  // This block catches and logs any errors that occur during the initialization process.
  console.log(err);
});
