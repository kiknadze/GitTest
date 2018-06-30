// let arr = ["I", "3", "Javascript"];
// let removed = arr.splice(1,1)
// let removed = arr.slice(1,1);
// console.log(arr, removed);

let nums = [2,4,9,5,7,13,24,1,-1];

// let users = [
//     {id: 1, name: "Gela"},
//     {id: 2, name: "John"},
//     {id: 3, name: "Jimsheri"},
//     {id: 4, name: "Ani"},
//     {id: 5, name: "Koba"},

// ]
// function compare(a,b){
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b) return -1;
// }
// // console.log(nums.sort((a, b) => {return a - b;}))

// let foundUser = users.find(user => user.id == 2);
// let filtered = users.filter( user => user.id < 4);

// console.log(foundUser);
// console.log(filtered);

// let doubled = nums.map((number, index, arr) => {
//     return number * 2;
// });

// console.table(doubled);

// let html = users.map(user => {
//     return `
//     <div class="user">
//         <h2 class="title">${user.name} <small>ID - ${user.id}</small></h2>
//     </div>`
// })

// document.body.innerHTML = html.join(" ");
// console.table(html)


//------------------------------დავალება 1 -----------------------------------

// let john = { name: "John", age: 25 };
// let adam = { name: "Adam", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [john, adam, mary];

// function compare(a, b) {
//     if(a.name > b.name) {
//         return 1;
//     } else if (a.name < b.name) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
// function sortByName(ar) {
//     ar.sort(compare);
// }

// sortByName(arr);

// alert(arr[1].name);



//------------------------------დავალება 2 -----------------------------------


// function unique(arr) {
//     let mas = [];
//     for(let i=0; i < arr.length; i++) {
//         if(!(mas.includes(arr[i]))) {
//             mas.push(arr[i]);
//         }
//     }
//     return mas;
// }

// let values = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];

// alert(unique(values));

// //მეორე ვარიანტი

// let uniqueStr = mixedStr.filter((value, index) => {
//     return mixedStr.indexOf(value) === index;
// });

//------------------------------დავალება 2 -----------------------------------





//------------------------------დავალება 3 -----------------------------------

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "pete", surname: "Hunt", id: 2 };
// let mary = { name: "mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let userMapped = users.map(user => { 
//     return {
//         fullName: `${user.name}  ${user.surname}`,
//         id: user.id}
        
        
//     })

// alert(userMapped[0].id)
// alert(userMapped[0].fullName)

//------------------------------დავალება 3 -----------------------------------


// function* generator() {
//     yield 'H'
//     console.log("H")
//     yield 'e'
//     console.log("e")
//     yield 'l'
//     console.log("l")
//     yield 'l'
//     console.log("l")
//     yield 'o'
//     console.log("o")
// }

// let g = generator();

// console.log(typeof g[Symbol.iterator] ==='function')

// // console.log(typeof g.next() === 'function');

// console.log(g[Symbol.iterator]() === g);
// console.log([...g]);
// console.log(Array.from(g))

// for (let char of g){
//     console.log(char);
// }

// let rangeCount = {
//     start: 1,
//     end: 13
// }

// rangeCount[Symbol.iterator] = function() {
//     return {
//         current: this.start,
//         last: this.end,

//         next() {
//             if(this.current < this.last) {
//                 return {
//                     done: false,
//                     value: this.current++
//                 }
//             }
//             else {
//                 return { done: true }
//             }
//         }
//     }
// }

// for( let num of range) {
//     console.log(num)
// }

// let set = new Set();

/*
set.add()
set.has()
set.delete()
set.clear()
set.size()

*/

// set.add(5).add(1).add(8).add(1)

// console.log(set)
// for( let key of set.keys()) {
//     console.log(key)
// }

// console.log(set.values())




// let values = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];
// let numSet = new Set(values);


// console.log(numSet);

// function subArr(arr) {
//     let sum = 0;
//     let mySet = new Set();

//     for( let num of arr ) {
//         sum += num;
//         if( mySet.has(sum)) {
//             return true;
//         }
//         mySet.add(sum);
//     }
//     return false;
// }

// console.log(subArr(nums))

/*
Date
new Date()
new Date(milliseconds)
new Date(datestring)
new Date(year, month, date, hours, minutes, seconds, ms)
*/

// let now = new Date();
// console.log(now)

// let start = new Date(0);
// console.log(start)

// let fromString = new Date('2018-06-30');
// console.log(fromString)

// let fromConst = new Date(2018, 6, 30, 14, 32, 48, 50)


//----------------დავალება -------------------------
// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//     let diff = tomorrow - now;
//     return Math.round(diff / 1000);
// }

// console.log(getSecondsToTomorrow())



// let myMap = new Map();

// //map.set()
// //map.get()

// myMap.set(1, "One");
// myMap.set(2, 'Two');
// myMap.set(false, 0);
// myMap.set(true, 1);
// myMap.set({name: 'John'}, "User");

// // console.table(myMap)
// // console.log(myMap.keys())

// for(let key of myMap.keys()) {
//     console.log(key)
// }
// for(let value of myMap.values()) {
//     console.log(value)
// }
// for(let [key, value] of myMap.entries()) {
//     console.log(key, value)
// }

// let prices = new Map([
//     ['banana', 5],
//     ['apple', 4],
//     ['kiwi', 4],
// ]);

// console.log(prices)

// let fromObj = new Map(Object.entries({
//     name: 'john',
//     age: 40,
//     stressed: 
// }));

// console.log(fromObj);

let sentence = "John the second is the son of John the first, while the second son of John the second is william the second.";

function countWords(sentence) {
    let arr = sentence.split(" ")
}