const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Register Handlebars view engine
app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
    helpers: {
        toUpperCase: function(str) {
            return str.toUpperCase();
        },
        toLowerCase: function(str) {
            return str.toLowerCase();
        },
        getStudentRow: function(student) {
            return `<tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.occupation}</td>
                <td>${student.company}</td>
            </tr>`;
        },
        strong: function(options){
            return '<strong>' + options.fn(this) + '</strong>';
        }
        
    }
}));
app.set('view engine', '.hbs');

// Routes
app.get('/', (req, res) => {
    // res.render('home', { name: 'Pritesh'});
    res.render('home', { name: 'Pritesh', layout:'main'});
});

app.get('/student', (req, res) => {
    var studentData = {
        name: "Pritesh",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    };

    res.render('student', { data:studentData, layout: false });
});

app.get('/employee', (req, res) => {
    var employees = [{
        name: "Pritesh",
        city: "Toronto",
        designation: "developer",
        company: "Scotia Bank",
        fulltime: true
    },
    {
        name: "John",
        city: "Calgary",
        designation: "QA",
        company: "CIBC Bank",
        fulltime: false
    },
    {
        name: "Moxie",
        city: "Toronto",
        designation: "developer",
        company: "Scotia Bank",
        fulltime: true
    }
];

    res.render('employee', { employees, layout: 'main' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});