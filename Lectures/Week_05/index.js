const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1/>');
});

// http://localhost:3000/name
app.get("/name", (req, res) => {
  res.send("Czarina Navarrete");
})

// http://localhost:3000/course/web700
app.get("/course/web700", (req, res) => {
  res.send("Web700 - Modern Web Application Development");
})

// http://localhost:3000/about
app.get("/about", (req, res) => {
   res.sendFile(`${__dirname}/views/about.html`);
})

// http://localhost:3000/contact
app.get("/contact", (req, res) => {
  res.sendFile(`${__dirname}/views/contact.html`);
})

// http://localhost:3000/college
app.get("/college", (req, res) => {
  const data = {
    method: "GET",
    name: "Seneca College",
    location: "Toronto, Ontario",
    programs: ["Computer Programming", "Computer Engineering", "Computer Networking"]
  }
  res.send(data);
});

// http://localhost:3000/college
app.post("/college", (req, res) => {
  const data = {
    method: "POST",
    name: "Seneca College",
    location: "Toronto, Ontario",
    programs: ["Computer Programming", "Computer Engineering", "Computer Networking"]
  }
  res.send(data);
});

//Query Parameters example
// http://localhost:3000/product?name=Laptop&price=1200
app.get("/product", (req, res) => {
  const data = {
    name: req.query.name,
    price: req.query.price
  }
  res.send(req.query);
});

//Route Parameters example
//http://localhost:3000/address/Yorkland/Toronto/M2X1X4
app.get("/address/:street/:city/:postalcode", (req, res) => {
  const data = {
    street: req.params.street,
    city: req.params.city,
    postalcode: req.params.postalcode
  }
  res.send(data);
})

const onServerStart = () => {
    console.log(`Server is running at http://localhost:${SERVER_PORT}`);
}

app.listen(SERVER_PORT, onServerStart)