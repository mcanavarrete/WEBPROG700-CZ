/*********************************************************************************
*  WEB700 – Assignment 05
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Ma Czarina Alexandria Navarrete Student ID: 126846237/mcanavarrete Date: February 17, 2024
*
********************************************************************************/ 

const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const collegeData = require("./modules/collegeData");

// Adding express-handlebars to your setup
const exphbs = require("express-handlebars");
const app = express();

// Setting up express-handlebars as the view engine
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        navLink: function(url, options) {
            return '<li' +
                ((url == app.locals.activeRoute) ? ' class="nav-item active" ' : ' class="nav-item" ') +
                '><a class="nav-link" href="' + url + '">' + options.fn(this) + '</a></li>';
        },
        equal: function(lvalue, rvalue, options) {
            if (arguments.length < 3)
                throw new Error("Handlebars Helper 'equal' needs 2 parameters");
            if (lvalue != rvalue) {
                return options.inverse(this);
            } else {
                return options.fn(this);
            }
        }
    }
}));

app.set('view engine', '.hbs');


app.use(express.static('views'));
app.use(express.static('images'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

// Initialize collegeData before starting the server
collegeData.initialize().then(() => {
    // setup http server to listen on HTTP_PORT
    app.listen(HTTP_PORT, () => { 
        console.log(`Server listening on: ${HTTP_PORT}`);
    });
}).catch(err => {
    console.log(err);
});

//middleware function
app.use(function(req, res, next) {
    let route = req.path.substring(1);
    app.locals.activeRoute = "/" + (isNaN(route.split('/')[1]) ? route.replace(/\/(?!.*)/, "") : route.replace(/\/(.*)/, ""));
    next();
});

// GET /
app.get("/", (req, res) => {
    res.render("home");
});


// GET /about
app.get("/about", (req, res) => {
    res.render("about");
});

// GET /htmlDemo
app.get("/htmlDemo", (req, res) => {
    res.render("htmlDemo");
});

// GET /students/add
app.get("/students/add", (req, res) => {
    res.render("addStudent");
});

// POST /students/add
app.post('/students/add', (req, res) => {
    // Convert checkbox value to boolean
    req.body.ta = req.body.ta ? true : false;
    collegeData.addStudent(req.body).then(() => {
        res.redirect("/students");
    }).catch(err => {
        console.log(err);
        res.status(500).send("Failed to add student");
    });
});

// GET /students
app.get("/students", (req, res) => {
    function renderStudents(students) {
        if (students.length > 0) {
            res.render("students", { students: students });
        } else {
            res.render("students", { message: "No students found" });
        }
    }

    function handleError(error) {
        console.log(error);
        res.render("students", { message: "no results" });
    }

    if (req.query.course) {
        collegeData.getStudentsByCourse(req.query.course).then(renderStudents).catch(handleError);
    } else {
        collegeData.getAllStudents().then(renderStudents).catch(handleError);
    }
});


// GET /courses
app.get("/courses", (req, res) => {
    collegeData.getCourses().then(data => {
        if (data.length > 0) {
            res.render("courses", { courses: data });
        } else {
            res.render("courses", { message: "No courses found" });
        }
    }).catch(err => {
        console.log(err);
        res.render("courses", { message: "no results" });
    });
});


app.get("/course/:id", (req, res) => {
    collegeData.getCourseById(req.params.id).then(data => {
        console.log(data); // Check the data object
        res.render("course", { course: data });
    }).catch(err => {
        console.log(err);
        res.status(404).send("Course not found");
    });
});


// GET /student/:num
app.get("/student/:num", async (req, res) => {
    try {
        const studentInfo = await collegeData.getStudentByNum(req.params.num);
        const courses = await collegeData.getCourses();
        
        // Set flags for status
        studentInfo.isFullTime = studentInfo.status === "Full Time";
        studentInfo.isPartTime = studentInfo.status === "Part Time";

        // Map isSelected for courses
        courses.map(course => {
            course.isSelected = parseInt(studentInfo.course) === course.courseId;
            course.courseName = course.courseDescription;
            return course;
        });

        res.render("student", { student: studentInfo, courses: courses });
    } catch (error) {
        console.error(error);
        res.status(500).send("Unable to retrieve student data");
    }
});

app.post("/student/update", async (req, res) => {
    try {
        // req.body will contain the form data
        console.log(req.body);  // Log the form data to see what is being passed
        
        // Assuming you have a function to update the student data that returns a promise
        await collegeData.updateStudent(req.body);

        // If successful, redirect to the list of students or a confirmation page
        res.redirect("/students");
    } catch (error) {
        console.error(error);
        // If an error occurs, send a user-friendly message or render an error page
        res.status(500).send("Unable to update student information.");
    }
});


// No matching route
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});



