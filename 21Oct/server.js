const express = require('express');
const path    = require('path');
const app     = express();
const countries = require('./countries'); 

app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( express.static( path.join( __dirname, '/node_modules/jquery' ) ) );
app.use( express.urlencoded( { extended: true } ) );
let PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/add', (req, res) => {
    if( !req.query.num_1 || !req.query.num_2) {
        res.sendStatus(400);
    }
    let num_1 = Number(req.query.num_1);
    let num_2 = Number(req.query.num_2);
    let result = num_1 + num_2;
    
    setTimeout( () => {
        res.send(result.toString())
    }, 2000)
     
})

//----------------------------------------------დავალება------------------------
// app.get('/', (req, res) => {
//     res.render('isPrime.html');
// })

// app.get('/add', (req, res) => {
//     if( !req.query.num_1 || !req.query.num_2) {
//         res.sendStatus(400);
//     }
//     let num_1 = Number(req.query.num_1);
//     let num_2 = Number(req.query.num_2);
//     let result = 0;
//     function isPrime(num) {
//         for(var i = 2; i < num; i++)
//           if(num % i === 0) return false;
//         return num !== 1 && num !== 0;
//       }
//     for(let j =num_1; j < num_2; j++) {
//         if(isPrime(j)) result++ 
//     }
//     setTimeout( () => {
//         res.send(result.toString())
//     }, 2000)
    
// })
//--------------------------------------------------------------

//------------------------------------------------------დავალება 2 --------------
app.get('/countries/:prefix', (req, res) => {
    if(!req.params.prefix) {
        return res.sendStatus(400)
    } 
    let prefix = req.params.prefix.toUpperCase();
    let result = countries.filter(country => country.name.toUpperCase().startsWith(prefix))
                            .map(country => country.name);
    res.json(result)
})

app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`);
})