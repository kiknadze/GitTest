const express     = require('express');
const path        = require('path')
const app         = express();
const controllers = require('./controllers/controller')

const PORT = process.env.PORT || 3000;

//set up template engine
app.set('views', './public');
app.set('view engine', 'pug');

//for post method
app.use(express.urlencoded({extended: true}));

//static files
app.use(express.static(path.join(__dirname, '/public')));

//fire controllers
controllers(app);

//listen to port
app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`);
})