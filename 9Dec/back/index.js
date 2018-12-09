const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

const secret = 'demo__system';
const app = express();

const encrypt = data => {
    const hash = crypto.createHmac('sha256', secret)
                    .update(data)
                    .digest('hex');
    return hash;
}
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const User = {
    username: 'admin',
    pasword: encrypt('admin123')
}

app.use( cors('*') )

app.get('/', (req, res) => {
    res.send("Hello")
})

app.post('/login', (req, res) => {
    let {username, password} = req.body;
    password = encrypt(password);

    if(User.username === username && User.pasword === password){
        res.json({
            username,
            password,
            User,
            auth: true
        })
    }
    else {
        res.json({
            auth: false,
            message: 'user not found'
        })
    }
})

app.listen(5000, ()=> {
    console.log('Port - 5000');
})