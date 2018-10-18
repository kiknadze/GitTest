const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', './public')
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))

let products = {
    Craphics: 0,
    HDMI: 0,
    SSD: 0
}

app.get('/', (req, res) => {
    res.render('index', { title: "Shopping Site", Craphics: products.Craphics})
})

app.post('/', (req, res) => {
    products.Craphics = req.body.Craphics;
    res.render('index', { Craphics: products.Craphics })
})

app.get('/HDMI', (req, res) => {
    res.render('HDMI', { title: "HDMI", HDMI: products.HDMI})
})

app.post('/HDMI', (req, res) => {
    products.HDMI = req.body.HDMI;
    res.render('HDMI', { HDMI: products.HDMI })
})

app.get('/SSD', (req, res) => {
    res.render('SSD', { title: "SSD", SSD: products.SSD})
})

app.post('/SSD', (req, res) => {
    products.SSD = req.body.SSD;
    res.render('SSD', { SSD: products.SSD })
})

app.get('/Summary', (req, res) => {
    let totalPrice = products.Craphics*40 + products.HDMI*10 + products.SSD*20;
    res.render('Summary', { title: "Summary", Craphics: products.Craphics, SSD: products.SSD, HDMI: products.HDMI, TOTAL: totalPrice })
})

app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`)
})