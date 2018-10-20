const express = require('express');
// const cookirParser = require('cookie-parser')
// const session = require('express-session')
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', './public')
app.set('view engine', 'pug');

// app.use(cookirParser());
// app.use(session({secret: 'super cat', name: "demo-site", resave: true, saveUninitialized: true}))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('index', { title: "Adding Person"})
})



app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`)
})