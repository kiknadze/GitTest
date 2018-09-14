// let upperCase = require('upper-case');
const dateFormatter = require('./data_formatter');

// for(let i=0; i < 10; i++){
//     console.log(i);
// }

// console.log(upperCase('my string'))

let current = new Date();
console.log(`Current Date - ${dateFormatter.formatDate(current, ':')}`)
console.log(`Current Time - ${dateFormatter.formatTime(current, ':')}`)