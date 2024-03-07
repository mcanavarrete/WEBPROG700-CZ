const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.send('Hello World');
    // + JSON.stringify(req.query));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Login Success');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});