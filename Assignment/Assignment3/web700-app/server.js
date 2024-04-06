/*********************************************************************************
*  WEB700 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Ma Czarina Alexandria Navarrete Student ID: 126846237/mcanavarrete Date: April 5, 2024
*
********************************************************************************/ 

// const HTTP_PORT = process.env.PORT || 8080;
// const express = require("express");
// const path = require("path");
// const collegeData = require("./modules/collegeData");

// // Adding express-handlebars to your setup
// const exphbs = require("express-handlebars");
// const app = express();
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const collegeData = require("./modules/collegeData.js");

const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.engine('.hbs', exphbs.engine({ 
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        navLink: function(url, options){
            return '<li' + 
                ((url == app.locals.activeRoute) ? ' class="nav-item active" ' : ' class="nav-item" ') + 
                '><a class="nav-link" href="' + url + '">' + options.fn(this) + '</a></li>';
        },
        equal: function (lvalue, rvalue, options) {
            if (arguments.length < 3)
                throw new Error("Handlebars Helper equal needs 2 parameters");
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
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(function(req,res,next){
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

// GET /students
app.get("/students", (req, res) => {
    function renderStudents(students) {
        // Check if there are any students to display
        if (students.length > 0) {
            res.render("students", { students: students });
        } else {
            // No students found
            res.render("students", { message: "No students found" });
        }
    }

    function handleError(error) {
        // Handle errors or no results found
        res.render("students", { message: "no results returned" });
    }
    

    if (req.query.course) {
        collegeData.getStudentsByCourse(req.query.course).then(renderStudents).catch(handleError);
    } else {
        collegeData.getAllStudents().then(renderStudents).catch(handleError);
    }
});

// GET /students/add
app.get("/students/add", (req, res) => {
    collegeData.getCourses().then(courses => {
        console.log("Courses fetched: ", courses); 
        res.render("addStudent", { courses });
    }).catch(err => {
        console.error("Error fetching courses: ", err);
        res.render("addStudent", { courses: [] });
    });
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

// GET /student/:num
app.get("/student/:studentNum", (req, res) => {
    // initialize an empty object to store the values
    let viewData = {};

    // first, get the student by studentNum
    collegeData.getStudentByNum(req.params.studentNum).then((data) => {
        if (data) {
            viewData.student = data; // store student data in the "viewData" object as "student"
        } else {
            viewData.student = null; // set student to null if none were returned
        }
    }).catch(() => {
        viewData.student = null; // set student to null if there was an error
    }).then(collegeData.getCourses)
    .then((data) => {
        viewData.courses = data; // store course data in the "viewData" object as "courses"

        // loop through viewData.courses and once we have found the courseId that matches
        // the student's "course" value, add a "selected" property to the matching
        // viewData.courses object
        for (let i = 0; i < viewData.courses.length; i++) {
            if (viewData.courses[i].courseId == viewData.student.courseId) {
                viewData.courses[i].selected = true;
            }
        }
    }).catch(() => {
        viewData.courses = []; // set courses to empty if there was an error
    }).then(() => {
        if (viewData.student == null) { // if no student - return an error
            res.status(404).send("Student Not Found");
        } else {
            res.render("student", { viewData: viewData }); // render the "student" view
        }
    });
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

// GET /student/delete/:studentNum
app.get("/student/delete/:studentNum", (req, res) => {
    collegeData.deleteStudentByNum(req.params.studentNum).then(() => {
        res.redirect("/students");
    }).catch(err => {
        console.log(err);
        res.status(500).send("Unable to Remove Student / Student not found");
    });
});

// GET /courses
app.get("/courses", (req, res) => {
    collegeData.getCourses().then(data => {
        // Check if there are any courses to display
        if (data.length > 0) {
            res.render("courses", { courses: data });
        } else {
            // No courses found
            res.render("courses", { message: "No courses found" });
        }
    }).catch(err => {
        // Handle errors or no results found
        res.render("courses", { message: "no results returned" });
    });
});

// GET /courses/add
app.get("/courses/add", (req, res) => {
    console.log("Accessing /courses/add");
    res.render("addCourse");
});


// POST /courses/add
app.post('/courses/add', (req, res) => {
    collegeData.addCourse(req.body).then(() => {
        res.redirect("/courses");
    }).catch(err => {
        console.log(err);
        res.status(500).send("Unable to add course");
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

// POST /course/update
app.post('/course/update', (req, res) => {
    collegeData.updateCourse(req.body).then(() => {
        res.redirect("/courses");
    }).catch(err => {
        console.log(err);
        res.status(500).send("Unable to update course");
    });
});

// GET /course/update
app.get("/course/update/:id", (req, res) => {
    // Assuming that you have a 'updateCourse' view to render
    collegeData.getCourseById(req.params.id).then((courseData) => {
        res.render("updateCourse", { course: courseData });
    }).catch(err => {
        console.log(err);
        res.status(404).send("Course not found");
    });
});

// GET /course/delete/:id
app.get("/course/delete/:id", (req, res) => {
    collegeData.deleteCourseById(req.params.id).then(() => {
        res.redirect("/courses");
    }).catch(err => {
        console.log(err);
        res.status(500).send("Unable to remove course / Course not found");
    });
});


collegeData.initialize().then(function(){
    app.listen(HTTP_PORT, function(){
        console.log("app listening on: " + HTTP_PORT)
    });
}).catch(function(err){
    console.log("unable to start server: " + err);
});

