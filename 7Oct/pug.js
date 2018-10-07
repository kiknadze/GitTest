const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.set('views', './view');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Page Title', message: "Welcome Message!...", numbers: [1,2,3,4,5,6,7,8]})
})

app.listen(PORT, () => {
    console.log(`Running - ${PORT}`)
})