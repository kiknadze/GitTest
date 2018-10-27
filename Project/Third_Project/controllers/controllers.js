module.exports = function(app) {

    let persons = [{ name: "Temo", 
                     lastname: "Kiknadze", 
                     id: "01005030045", 
                     fathername: "Aleqsi", 
                     birthdate: "01/05/2019", 
                     status: '1', 
                     cars: ["S343dfr"] },
                   { name: "Vano", 
                     lastname: "Koberidze", 
                     id: "01005040018", 
                     fathername: "Levani", 
                     birthdate: "01/05/1994", 
                     status: '1', 
                     cars: ["78RER4f"] }];
 
    let cars = [{ mark: "BMW", 
                  model: "E125",
                  vin: "S343dfr",
                  gNumber: "UU-861-NN",
                  color: "BLACK",
                  status: '1',
                  persons: '01005030045',
                  oldOwners: [] }, 
                { mark: "MERCEDES", 
                  model: "M15",
                  vin: "78RER4f",
                  gNumber: "BB-852-CC",
                  color: "RED",
                  status: '1',
                  persons: '01005040018',
                  oldOwners: [] }];

    app.get('/car', (req, res) => {
        res.render('car', { title: "Adding Cars", cars, persons })
    })

    app.post('/car/add', (req, res) => {
        let { mark, model, color, gNumber, vin, owner } = req.body;
        cars.push( { mark, model, vin, gNumber, color, status: '1', persons: owner, oldOwners: [] } )
        res.render('car', { persons, cars })
    })

    app.get('/car/edit/:id', (req, res) => {
        let editCar = cars.find( car => car.vin == req.params.id )
        res.render('caredit', { title: "UPDATE Car", editCar, persons })
    })

    app.post('/car/update', (req, res) => {
        let { mark, model, color, gNumber, vin, owner } = req.body;
        let index = cars.findIndex( car => car.vin == vin);
        cars[index].mark = mark;
        cars[index].model = model;
        cars[index].color = color;
        cars[index].gNumber = gNumber;
        if(cars[index].persons != owner){
            cars[index].oldOwners.push(cars[index].persons)
            let i = persons.findIndex( person => person.id == cars[index].persons );
            persons[i].cars.splice(persons[i].cars.findIndex( car => car.vin == vin ), 1);
            persons[persons.findIndex( person => person.id == owner)].cars.push(vin)
            cars[index].persons = owner;
        }
        let message = `${cars[index].gNumber} successfully Updated`;
        res.render('action', { title: "MESSAGE", message })
    })

    app.get('/car/delete/:id', (req, res) => {
        let index = cars.findIndex( car => car.vin == req.params.id );
        let message = `${cars[index].gNumber} successfully deleted`;
        let i = persons.findIndex( person => person.id == cars[index].persons );
        persons[i].cars.splice(persons[i].cars.findIndex( car => car.vin == req.params.id ), 1);
        cars.splice(index, 1);
        res.render('action', { title: "MESSAGE", message })
    })

    app.post('/car/search', (req, res) => {
        let searched = [];
        let message;
        if(req.body.vin) {
            if( cars.find( car => car.vin == req.body.vin ) ) {
                searched.push( cars.find( car => car.vin == req.body.vin ) );
                res.render('searchCar', { searched, persons });
            } else {
                message = `There is no car with this vin: ${req.body.vin}`;
                res.render('action', { title: "MESSAGE", message })
            }  
        } 
        else if(req.body.markmodel) {
            let markmodel = (req.body.markmodel).split(' ');
            searched = cars.filter(car => car.mark == markmodel[0] && car.model == markmodel[1]);
            if(searched.length > 0) {
                res.render('searchCar', { searched, persons });
            } else {
                message = `There is no car with this Mark & Model: ${req.body.markmodel}`;
                res.render('action', { title: "MESSAGE", message });
            }
        }
    })

    app.get('/car/status/:statusID/:id', (req, res) => {
        let index = cars.findIndex( car => car.vin == req.params.id )
        let message;
        if(req.params.statusID == 1) {
            cars[index].status = '0';
            message = `Status Of ${cars[index].gNumber} Made Disable`
        } else {
            cars[index].status = '1';
            message = `Status Of ${cars[index].gNumber} Made Enable`
        }
        res.render('action', { title: "MESSAGE", message })
    })

    app.get('/', (req, res) => {
        res.render('index', { title: "Adding Person", cars, persons })
    })

    app.get('/admin', (req, res) => {
        res.render('admin', { title: "Admin Panel", persons, cars })
    })

    app.post('/', (req, res) => {
        let { name, lastname, id, fathername, birthdate } = req.body;
        persons.push( { name, lastname, id, fathername, birthdate, status: '1', cars: [] } )
        res.render('index', { persons, cars })
    })

    app.post('/person/update', (req, res) => {
        let { name, lastname, id, fathername, birthdate } = req.body;
        let index = persons.findIndex( person => person.id == req.body.id);
        persons[index].name = name;
        persons[index].lastname = lastname;
        persons[index].fathername = fathername;
        persons[index].birthdate = birthdate;
        let message = `${persons[index].name} successfully Updated`;
        res.render('action', { title: "MESSAGE", message })
    })

    app.get('/person/delete/:id', (req, res) => {
        let index = persons.findIndex( person => person.id == req.params.id );
        let message = `${persons[index].name} successfully deleted`;
        persons.splice(index, 1);
        res.render('action', { title: "MESSAGE", message })
    })

    app.get('/person/edit/:id', (req, res) => {
        let editPerson = persons.find( person => person.id == req.params.id )
        res.render('personedit', { title: "UPDATE", editPerson })
    })

    app.post('/person/search', (req, res) => {
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