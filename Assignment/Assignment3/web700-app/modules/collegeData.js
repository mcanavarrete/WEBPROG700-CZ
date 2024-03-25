const fs = require("fs");

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

module.exports.initialize = function () {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {
            if (err) {
                reject("unable to load courses"); return;
            }

            fs.readFile('./data/students.json', 'utf8', (err, studentData) => {
                if (err) {
                    reject("unable to load students"); return;
                }

                dataCollection = new Data(JSON.parse(studentData), JSON.parse(courseData));
                resolve();
            });
        });
    });
};

module.exports.getAllStudents = function () {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length == 0) {
            reject("query returned 0 results"); return;
        }

        resolve(dataCollection.students);
    });
};

module.exports.getTAs = function () {
    return new Promise(function (resolve, reject) {
        let filteredStudents = dataCollection.students.filter(student => student.TA === true);

        if (filteredStudents.length == 0) {
            reject("query returned 0 results"); return;
        }

        resolve(filteredStudents);
    });
};

module.exports.getCourses = function () {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length == 0) {
            reject("query returned 0 results"); return;
        }

        resolve(dataCollection.courses);
    });
};

module.exports.getCourseById = function(id) {
    return new Promise((resolve, reject) => {
        let foundCourse = dataCollection.courses.find(courses => courses.courseId == id);
        if (foundCourse) {
            resolve(foundCourse);
        } else {
            reject("Query returned 0 results");
        }
    });
};


module.exports.getStudentByNum = function (num) {
    return new Promise(function (resolve, reject) {
        let foundStudent = dataCollection.students.find(student => student.studentNum == num);

        if (!foundStudent) {
            reject("query returned 0 results"); return;
        }

        resolve(foundStudent);
    });
};

module.exports.updateStudent = function(studentData) {
    return new Promise((resolve, reject) => {
        let index = dataCollection.students.findIndex(student => student.studentNum == studentData.studentNum);
        if (index !== -1) {
            // Merge existing student data with new data
            dataCollection.students[index] = {...dataCollection.students[index], ...studentData};

            // Add code to write the updated students array back to your JSON file
            fs.writeFile('./data/students.json', JSON.stringify(dataCollection.students, null, 4), 'utf8', (err) => {
                if (err) {
                    reject("Unable to save updated student data");
                } else {
                    resolve();
                }
            });

        } else {
            reject("Student Not Found");
        }
    });
};


module.exports.getStudentsByCourse = function (course) {
    return new Promise(function (resolve, reject) {
        let filteredStudents = dataCollection.students.filter(student => student.course == course);

        if (filteredStudents.length == 0) {
            reject("query returned 0 results"); return;
        }

        resolve(filteredStudents);
    });
};

module.exports.addStudent = function (studentData) {
    return new Promise((resolve, reject) => {
        // Assuming studentData.enrollmentStatus has the correct 'Full Time' or 'Part Time' value
        // Map enrollmentStatus to status
        studentData.status = studentData.enrollmentStatus;

        // Convert TA checkbox value to boolean
        studentData.TA = studentData.TA === "true";

        // Parse course as an integer if necessary
        studentData.course = parseInt(studentData.course);

        // Assign a new unique studentNum
        // Assuming studentNum is a number and not an auto-incrementing ID in a database
        let maxNum = dataCollection.students.reduce((max, student) => Math.max(max, student.studentNum), 0);
        studentData.studentNum = maxNum + 1;

        // Add the new student to the collection
        dataCollection.students.push(studentData);

        // Write the updated students array back to the students.json file
        fs.writeFile('./data/students.json', JSON.stringify(dataCollection.students, null, 4), 'utf8', (err) => {
            if (err) {
                reject("Unable to save new student");
            } else {
                resolve();
            }
        });
    });
};

