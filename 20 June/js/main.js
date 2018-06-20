// function checkAge(age, granted, denied) {
//     if(age<18) denied();
//     else granted();
// }

// let age = prompt('What is your age?', 18);

// let grantAccess = () => alert('Access granted');
// let denyAccess = () => alert('Access denied');

// checkAge(age, grantAccess, denyAccess);

// let years = new Array(10);
// let years2 = [];

// console.log(typeof years);
// console.log(typeof years2);

// console.log(years2.length);

// console.log(years.length);

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[2] = 'Lemon';
// console.log(fruits[2]);

// let arr = ['apple', { name: "John"}, true, () => {alert("hello from aray")}];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[1].name);
// arr[3]();

// let numbers = [];
// //push/pop
// numbers.push(1);
// numbers.push(3);
// numbers.push(8);
// // console.log(numbers);
// // let removed = numbers.pop();
// // console.log(`removed: ${removed}`);
// // numbers.pop();
// // console.log(numbers);
// // numbers.length=0;
// // //shift/unshift
// // numbers.unshift(1)
// // numbers.unshift(3)
// // numbers.unshift(8)
// // console.log(numbers);
// // removed=numbers.shift();
// // console.log(`removed: ${removed}`);
// // console.log(numbers);

// let n = numbers;
// // console.log(typeof(n))
// // console.log(n);
// n.push(33);
// // console.log(numbers);
// let clone = numbers.slice();
// clone.push(64);
// // console.log(clone)
// // console.log(clone)

// clone.age = 11;
// //console.log(clone[4]);

// for(let index = 0; index < numbers.length; index += 1) {
//    // console.log(numbers[index]);
// }

// for(number in numbers) {
//     console.log(numbers[number])
// }

// console.log(numbers.toString());
// console.log(numbers.join("-"));
// console.log(numbers);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// console.log(matrix[0][1])

//დავალება 1
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.

// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.

// Calculates and returns the sum of array items.

// P.S. A zero 0 is a valid number, please don’t stop the input on zero.


// function sumInput() {
//     let i = true;
//     let mas = [];
//     while(i) {
//         let number = prompt('shemoitane');
//         if(number !== "" && number !== null && isNaN(number) == false) {
//             mas.push(Number(number));
//         } else {
//             let sum = 0;
//             for(let index = 0; index < mas.length; index++) {
//                 sum+=mas[index];
//             }
//             console.log(sum);

//             i=false;
            
//         }
        
//     }

// }

// sumInput();


//DOM
// console.log(document);
// console.log(document.documentElement);


console.log(document.body);
console.log(document.head);

childNodes, fistChild, lastChild
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

for(let i=0; i < document.body.childNodes.length; i+=1) {
    console.log(document.body.childNodes[i].nodeName)
}
