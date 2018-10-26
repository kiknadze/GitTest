module.exports = function(app) {

    let persons = [{name: "Temo", lastname: "Kiknadze", id: "100503001", fathername: "Aleqsi", birthdate: "01/05/2019", status: '1', cars: ["S343df"]}];

    let cars = [{mark: "BMW", 
    model: "E125",
    vin: "S343df",
    gNumber: "S343df",
    color: "BLACK",
    status: '1',
    persons: '100503001'}, {mark: "BMW", 
    model: "E125",
    vin: "S343df",
    gNumber: "S343df",
    color: "BLACK",
    status: '1',
    persons: '100503001'}];

    app.get('/car', (req, res) => {
        res.render('car', { title: "Adding Cars", cars, persons })
    })

    app.get('/', (req, res) => {
        res.render('index', { title: "Adding Person", cars, persons })
    })

    app.get('/admin', (req, res) => {
        res.render('admin', { title: "Admin Panel", persons })
    })

    app.post('/', (req, res) => {
        let { name, lastname, id, fathername, birthdate } = req.body;
        persons.push( { name, lastname, id, fathername, birthdate, status: '1', cars: [] } )
        console.log(persons)
        res.render('index', { persons })
    })

    app.post('/update', (req, res) => {
        let { name, lastname, id, fathername, birthdate } = req.body;
        let index = persons.findIndex( person => person.id == req.body.id);
        persons[index].name = name;
        persons[index].lastname = lastname;
        persons[index].fathername = fathername;
        persons[index].birthdate = birthdate;
        let message = `${persons[index].name} successfully Updated`;
        res.render('action', { title: "MESSAGE", message })
    })

    app.get('/delete/:id', (req, res) => {
        let index = persons.findIndex( person => person.id == req.params.id );
        let message = `${persons[index].name} successfully deleted`;
        persons.splice(index, 1);
        res.render('action', { title: "MESSAGE", message })
    })

    app.get('/edit/:id', (req, res) => {
        let editPerson = persons.find( person => person.id == req.params.id )
        res.render('personedit', { title: "UPDATE", editPerson })
    })

    app.post('/search', (req, res) => {
        let searched = [];
        let message;
        if(req.body.id) {
            if( persons.find( person => person.id == req.body.id ) ) {
                searched.push( persons.find( person => person.id == req.body.id ) );
                res.render('search', { searched, cars });
            } else {
                message = `There is no person with this ID: ${req.body.id}`;
                res.render('action', { title: "MESSAGE", message })
            }  
        } 
        else if(req.body.fullname) {
            let fullname = (req.body.fullname).split(' ');
            searched = persons.filter(person => person.name == fullname[0] && person.lastname == fullname[1]);
            if(searched.length > 0) {
                res.render('search', { searched, cars });
            } else {
                message = `There is no person with this Full Name: ${req.body.fullname}`;
                res.render('action', { title: "MESSAGE", message });
            }
        }
    })

    app.get('/status/:statusID/:id', (req, res) => {
        let index = persons.findIndex( person => person.id == req.params.id )
        let message;
        if(req.params.statusID == 1) {
            persons[index].status = '0';
            message = `Status Of ${persons[index].name} Made Disable`
        } else {
            persons[index].status = '1';
            message = `Status Of ${persons[index].name} Made Enable`
        }
        res.render('action', { title: "MESSAGE", message })
    })
}