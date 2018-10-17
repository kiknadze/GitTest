const express = require('express');
const cookirParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const multer = require('multer')
const mCache = require('memory-cache')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', './public/views')
app.set('view engine', 'pug');

//put(ket, value, time, timeoutCallback)
//get(key)
mCache.put('super-cache', 'wow', 300, function(key, value){
    console.log(`Key - ${key}, Value - ${value}`)
})

console.log(`Super Cache - ${mCache.get('super-cache')}`)

setTimeout( () => {
    console.log(`Super Cache 500ms - ${mCache.get('super-cache')}`)
}, 500)


const multerConfig = multer({
    dest: 'public/uploads'
})
// app.use(cookirParser());
// app.use(session({secret: 'super cat', name: "demo-site", resave: true, saveUninitialized: true}))
// app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'upload.html'))
})

app.get('/cache', (req, res) => {

})

const cachePage = (duration) => {
    return (req, res, next) => {
        let key = `__cached__${ req.originalUrl || req.url }`;
        let pageBody = mCache.get(key)

    }
}

app.post('/', multerConfig.single('image'), (req, res) => {
    const userName = req.body.username;
    const imgUrl = path.join( 'uploads', req.file.filename )
    res.render('index', { imgUrl, userName })
})


app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`)
})