const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(express.static("views"));

app.listen(HTTP_PORT, () => {
    console.log("Server is running on port " + HTTP_PORT);
});