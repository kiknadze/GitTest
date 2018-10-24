module.exports = function(app) {

    let persons = [];

    app.get('/', (req, res) => {
        res.render('index', { title: "Adding Person", persons})
    })

    app.post('/', (req, res) => {
        let { name, lastname, id, fathername, birthdate } = req.body;
        persons.push( { name, lastname, id, fathername, birthdate } )
        console.log(persons)
        res.render('index', { persons })
    })

    app.get('/delete/:id', (req, res) => {
        for(let i=0; i < persons.length; i++) {
            if(persons[i].id == req.params.id) {
                persons.splice(i, 1)
            }
        }
        res.render('index', { persons })
    })

    app.get('/edit/:id', (req, res) => {
        let editPerson;
        for(let i=0; i < persons.length; i++) {
            if(persons[i].id == req.params.id) {
                editPerson = JSON.parse(persons[i]);
            }
        }
        console.log(editPerson)
        res.render('personedit', editPerson)
    })
}