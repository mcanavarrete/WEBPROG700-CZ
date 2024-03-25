const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(express.static("views"));

app.get("/api/users", (req, res) => {
    res.json({message: "fetch all users"});
});

app.post("/api/users", (req, res) => {
    const data = req.body;
    res.json({
                message: "add a user",
                data
            });
});

app.get("/api/users/:userId", (req, res) => {
    res.json({message: "get user with Id: " + req.params.userId});
});

app.put("/api/users/:userId", (req, res) => {
    res.json({
            message: "update User with Id: " + req.params.userId,
            data: req.body
        });
});

app.delete("/api/users/:userId", (req, res) => {
        res.json({message: "delete User with Id: " + req.params.userId});
});

app.listen(HTTP_PORT, () => {
    console.log("Server is running on port " + HTTP_PORT);
});