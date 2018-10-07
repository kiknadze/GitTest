const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;
let id = 0;
let products = [
    {name: "Apple", id: id++, price: 4000}, 
    {name: "Samsung", id: id++, price: 3500},
];

let myMid = function(req, res, next) {
    console.log(`${req.ip}, ${req.hostname}, Middleware function`);
    next();
}

let timeLog = function(req, res, next){
    let time = new Date();

    req.requestTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    next()
}

app.use(express.static(path.join(__dirname, '/public',)))
app.use(myMid)
app.use(timeLog)

app.get('/calc', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    let operator = req.query.operation;

    switch(operator){
        case '+':
        res.send(`${num1+num2}`)
        break;

        case '-':
        res.send(`${num1-num2}`)
        break;

        case '*':
        res.send(`${num1*num2}`)
        break;

        case '/':
        res.send(`${num1/num2}`)
        break;
    }
})

app.get('/', (req, res) => {
    console.log(`index.html - ${req.requestTime}`)
    // res.sendFile(path.join(__dirname, '/public', 'index.html'))
    res.sendFile('index.html')
    // res.sendFile('index.html', {root: path.join(__dirname, '/public',)})
    // res.json({text: "Hello text"});
})

app.get('/admin',(req, res) => {
    res.redirect('/')
})

app.get('/product', (req, res) => {
    res.json(products)
})

app.get('/product/:id(\\d)', (req, res) => {
    const id = req.params.id;
    let product = products.find(p => p.id == id);
    if(!product) {
        // return res.status(404).send("No Product found")
        return res.sendStatus(404)
    } else {
        res.json(product)
    }
})

app.get('/product/:name', (req, res) => {
    const name = req.params.name;
    let product = products.find(p => p.name == name);
    if(!product) {
        // return res.status(404).send("No Product found")
        return res.sendStatus(404)
    } else {
        res.json(product)
    }
})

app.delete('/product/:id', (req, res) => {
    const id = products.findIndex(p => p.id == req.params.id);
    const product = products[id];
    products.splice(id, 1)
    res.json({message: "product deleted", product})
})

app.post('/product/:id/:name/:price', (req, res) => {
    let product = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    }
    products.push(product);
    res.json({message: "roduct created", product})
})

app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`)
})