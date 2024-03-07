var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.use(express.static('views'));
app.use(express.static('images'));
app.use(express.static('styles'));

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => { 
    console.log(`Server listening on: ${HTTP_PORT}` )
});
