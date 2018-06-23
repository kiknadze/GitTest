'use strict';

// let user = new Object();
// let user_2 = {};

let user = {
    name: "John",
    age: 33
}

// user_2.name = "User 2";
// user_2.age = 30;

// user.isAdmin = true;

// Object.defineProperty(user, "lastname", {
//     value: 'Doe',
//     writable: false,
//     configurable: false,
//     enumerable: false
// })

// Object.defineProperties(user_2, {
//     name: { value: "Test", writable: false },
//     lastname: { value: "lastname", writable: false }
// })



// console.log(user.name, user['age'], user['isAdmin']);

// delete user.age;
// console.log(user.name, user['age'], user['isAdmin']);

// let key = prompt("Enter Key:", 'name');

// alert(user[key]);

/*
    value
    writable,
    enumarable
    configurable
*/



// ----------------------------------------დავალება 1-----------------------------------
/* let product = new Object();

product = {
    name: "Laptop",
    price: 1200
}

product.price = 1000;

document.writeln(product.name," ", product.price);
delete product.name;
document.writeln(product.name, " ", product.price); */

//--------------------------------------------------------------------------------------

// let speed = 300;
// color = "black";
// let year = 2018;

// let car = {
//     color,
//     year,
//     engine: 6.3
// }

// Object.defineProperty(car, 'speed', {
//     value: speed,
//     enumerable: false,
// })

// console.log(car);
// console.log('engine' in car);

// for( let key in car ) {
//     console.log(`key: ${key}, value: ${car[key]}`)
// }



//--------------------------------------დავალება 2 -------------------------------------

/*let salaries = {
    John: 100,
    Ann: 160, 
    Peter: 130
}

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}

document.write(sum); */

//---------------------------------------------------------------------------------------


// const myConst = {
//     name: "const"
// }

// myConst.new = 'new';
// console.log(myConst);

// let clone = Object.assign({}, user);
// console.log(user, clone)


// user.sayHi = function() {
//     // alert("hello");
//     alert(this.name)
// }

// // user.sayHi();
// // user['sayHi']();

// function blaBlaBla() {
//     alert(this);
// }

// let userV2 = {
//     name: "javascript",
//     sayHi() {
//         let func = () => alert(this.name);
//         func()
//     }
// }

// userV2.sayHi();



//--------------------------------------დავალება 3 -------------------------------------


// let calculator = {
//     number1: 5,
//     number2: 15,
//     read() {
//         let func = () => console.log(this.number1, this.number2);
//         func()
//     },
//     sum() {
//         return this.number1 + this.number2;

//     },

//     mul() {
//         return this.number1 * this.number2;

//     }

// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//--------------------------------------დავალება 3 -------------------------------------


//--------------------------------------დავალება 4 -------------------------------------

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert(this.step);
//     }
// }

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// ladder.up().up().down().showStep();
//--------------------------------------დავალება 4 -------------------------------------


// function greet(){
//     alert(this.name);
// }

// function say(time, phrase){
//     alert(`[${time}] ${this.name}: ${phrase}`);
// }

// // call, apply

// let client = { name: 'client'}
// let admin = { name: 'admin'}
// let john = {name: 'John'}

// greet.call(client)
// greet.call(admin)

// say.call(john, '10:00', 'halllo');

// let message = ['10:00', 'halllo'];

// say.apply(john, message);

//

// let id = Symbol('id');
// let id1 = Symbol('id');

// john[id] = "ID Value";

// console.log(john[id]);
// console.log(john);

// for(let key in john) {
//     console.log(key)
// }

// let customer = {
//     name: 'Super',
//     [id]: 140 
// }

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     this.hello = function() {
//         alert(`my Name is : ${this.name}`)
//     }
// }

// let conUser = new User("new User");

// console.log(conUser);
// conUser.hello();


//------------------------------დავალება 5 ---------------------------------


// function Calculator() {
//     this.number1 = 5,
//     this.number2 = 15,
//     this.read = function() {
//         document.writeln(`${this.number1}  ${this.number2}`);
//     },
//     this.sum = function() {
//         return this.number1 + this.number2;

//     },

//     this.mul = function() {
//         return this.number1 * this.number2;

//     }

// }

// let calculator = new Calculator();

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
//------------------------------დავალება 5 ---------------------------------


//------------------------------დავალება 6 ---------------------------------
// function Accumulator(startingvalue) {
//     this.currentvalue = startingvalue,
//     this.read = function() {
//         return this.currentvalue += Number(prompt("shemoitane"))

//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.currentvalue);
//------------------------------დავალება 6 ---------------------------------

// let num = 5;
// let single = 'single';
// let double = "double";
// let backtick = `backticks`;

// console.log('my ' + num + single);
// console.log('my ' + num + double);
// console.log(`my ${num} ${single}`);

// console.log('\u00A9');
// console.log('\u{20331}');
// console.log('I \u{1f60d} JS');

// let str = "Hello"
// console.log("String".length)
// console.log(str.charAt(2))
// console.log(str[0])

// for(let char of str) {
//     console.log(char)
// }

// str = 'hello from the other side';
// console.log(str)

// console.log("uppercase".toLocaleUpperCase())
// console.log('LOWERCASE'.toLocaleLowerCase())
// console.log("uppercase"[0].toLocaleUpperCase())

// console.log(str.indexOf('f'))
 
// let target = 'the';
// let pos = 0;

// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if(foundPos == -1) break;

//     console.log(`Found at ${foundPos}`);
//     pos = foundPos + 1;
// }

// console.log('2-3'.split('-').join(':'));




function Calculator(sityva) {
    this.sityva = sityva,
    this.num = sityva.split,
    this.num1 = Number(sityva[0]),
    this.num2 = Number(sityva[2]),
    this.oper = sityva[1],

    this.moqmedeba = function() {
        return this.num1, this.oper, this.num2;
    }


}

let calc = new Calculator("3 + 7");
alert(calc.moqmedeba())