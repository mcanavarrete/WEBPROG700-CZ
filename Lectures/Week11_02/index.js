console.log("Week - 11: Database example with Node.js and PostgreSQL")
const Sequelize = require('sequelize');
const dbConfig = require('./db_config');

//'postgres://postgres:postgres@localhost:5432/week11'
var db = new Sequelize(dbConfig.PGDATABASE, dbConfig.PGUSER, dbConfig.PGPASSWORD, {
    host: dbConfig.PGHOST,
    dialect: dbConfig.DIALECTS,
    port: dbConfig.PGPORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: {
        raw: true
    }
});


async function  db_operations(){
    await db.authenticate()
    console.log('Connection has been established successfully.');
    // Define a "Project" model
    var ProjectModel = db.define('Project', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT
    });

    // Define a "Student" model
    var StudentModel = db.define('Student', {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        city: Sequelize.STRING
    });

    await db.sync()
    console.log('Database synced successfully');
    // Insert a new project
    await ProjectModel.create({
        title: 'Project 2',
        description: 'Second Project'
    });

    await StudentModel.create({
        first_name: 'Czarina',
        last_name: 'Navarrete',
        age: 30,
        city: 'Markham'
    });

    console.log('Student Inserted successfully');
}

try {
    db_operations() 
} catch (err) {
    console.error('Unable to connect to the database:', err);
}
