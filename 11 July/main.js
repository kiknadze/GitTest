// let animal = {
//     eats: true
// }

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = animal;

// let jeka = new Dog('White Jeka');
// console.log(jeka.eats)

// //__proto__ -> Parent

// console.log(Dog.prototype.constructor)

// let obj = {};
// console.log(obj.toString())

let newObject = {}
let newObject1 = Object.create(Object.prototype);
let newObject2 = new Object();

// newObject.someKey = "Hello World";
// console.log(newObject.someKey)

// newObject1['someKey'] = "Hellow World";
// console.log(newObject['someKey']);

Object.defineProperty(newObject2, 'someKey', {
    value: "SomeKey",
    writable: true,
    configurable: true,
    enumerable: true
});

function defineProg(obj, key, value) {
    let config = {
        value,
        writable: true,
        enumerable: true,
    }
    Object.defineProperty(obj, key, config)
}


let person = Object.create( Object.prototype);

defineProg(person, 'car', 'supercar');
defineProg(person, 'dataOfBirth', '1970');
defineProg(person, 'hasBeard', true);

Object.defineProperties(person, {
    'key': {
        value: "key value",
        writable: true,
        configurable: true,
        enuramable: true,
    },
    'key2' : {
        value: "key2 value",
        writable: true,
        configurable: true,
        enuramable: true,
    }
})

// console.log(person)

let driver = Object.create( person )

defineProg(driver, 'topSpeed', '170mph');
// console.log(driver)

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    // this.toString = function() {
    //     return `${this.model} has done  ${this.miles}`;
    // }
}

Car.prototype.toString = function() {
    return `${this.model} has done  ${this.miles}`;
}

let civic = new Car('Honda civic', 2017, 24564)
let prius = new Car('Toyota Prius', 2017, 64)

// console.log(driver.toString())
// console.log(civic.toString())
// console.log(prius.toString())


function to(generator, limit) {
    let current = 0;
    
    return function() {
        if(current < limit) {
            current += 1;
            return generator();
        }
        return undefined;
    }
}

function randomNumber() {
    return Math.round(Math.random()*100);
}

let steps = to(randomNumber, 3);
console.log(steps())
console.log(steps())
console.log(steps())
console.log(steps())