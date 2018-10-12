const express = require('express');
const cookirParser = require('cookie-parser')
const path = require('path')
const app = express();

const PORT = 3000;

app.set('views', './public')
app.set('view engine', 'pug');

app.use(cookirParser("cipher"));

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))

// app.get('/', (req, res) => {
//     res.cookie("username", "Temo Kiknadze");
//     res.cookie("cart", { items: [1,2,3] });
//     res.cookie("forever", 1, { maxAge: 6000 })
//     res.cookie('signed', "random text", { signed: true })
//     res.send('Hello')
// })

app.get('/', (req, res) => {
    res.render('index', { title: "DEMO Title", colorname: req.cookies.color })
})

app.post('/', (req, res) => {
    const {colorname} = req.body;
    res.cookie("color", colorname);
    res.render('index', { colorname })
})

// app.get('/clear', (req, res) => {
//     res.clearCookie("username");
//     res.clearCookie("cart");
//     res.send("Cookies has been removed")
// })

// app.get('/cookies', (req, res) => {
//     res.write(`<h1>Username - ${ req.cookies.username }</h1>`);
//     res.write(`<h1>forever - ${ req.cookies.forever }</h1>`);
//     res.write(`<h1>Cart - ${ req.cookies.cart.items.join(' ') }</h1>`);
//     res.write(`<h1>signed - ${ req.signedCookies['signed'] }</h1>`);
//     res.end()
// })

app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`)
})