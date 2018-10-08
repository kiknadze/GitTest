const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;
let productsDB = [];

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, '/public')))

// app.get('/', (req, res) => {

//     res.sendFile(path.join(__dirname, '/public', 'index.html'))

//     // res.sendFile('index.html', {root: path.join(__dirname, '/public',)})
//     // res.json({text: "Hello text"});
// })
// let products = [];

//----------------------------------------------------დავალება 7------------------------------
// app.post('/add', (req, res) => {
//     let product = {
//         id: req.body.prodID,
//         name: req.body.name,
//         price: req.body.name
//     }

//     products.push(product)
//     res.send("Product Added Successfuly! <a href='http://localhost:3000'>BACK</a>");
// }) 

// app.get('/view', (req, res) => {
//     res.send(products.map(prod => {
//         return `<p>ID: ${prod.id} Name: ${prod.name} Price: ${prod.price}</p>`;
//     }).join(' '));
// })

//----------------------------------------------------დავალება 8------------------------------

app.get('/', (req, res) => {
    res.render('index', { 
        title: "DEMO Title", 
        added: false, 
        productsDB })
})

app.post('/', (req, res) => {
    const { product_name, product_price, product_id } = req.body;
    productsDB.push( {product_id, product_name, product_price} )
    res.render('index', {
        title: "DEMO Title", 
        added: true, 
        productsDB})
})

app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`)
})