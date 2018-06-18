
// getName();
// function getName() {
//     alert("Name");
// }

// let getNamev2 = function() {
//     alert("Namev2");
// }

// getNamev2();

// function showMessage(from, text) {
//     from = `* ${from} *`;
//     alert(`${from}: ${text}`)
// }

// let from = 'John';
// showMessage(from, 'Hello');

// alert(from);

// function sum(x, y) {
//     return x + y;
// }

// let result = sum(5, 8);

// function checkMovie(age) {
//     if(age < 18) return;
//     alert("access graned!...")
// }

// function nothing() {
//     //empty
// }
// checkMovie(17);
// document.write(result);

//-----------------------------------------------------
// დავალება 1
// function xarisxi(x,n) {
//     let result=x;
//     for(let i=1; i<n; i++) {
//         result*=x;
//     }
//     alert(result);
// }

// let x = Number(prompt("number"));
// let n = Number(prompt("xarisxi"));

// if(n > 1 && n == Math.round(n)) {
//     xarisxi(x, n);
    
// } else {
//     alert("aranaturaluria");
// }

// დავალება 2
// function isPrime(n) {
//     let number = Math.round(n);
//     for(let i=2; i<number; i++) {
//         if(number % i == 0) return false;
//     }
//     return true;
// }

// x=prompt('shemoitane');
// console.log(isPrime(x));

// function showPrimes(y) {
//     for(i=2; i<y; i++) {
//         if(isPrime(i)) {
//             document.writeln(i);
//         }
//     }
// }

// showPrimes(x);


//------------------------------------------------------

// function ask(question, yes, no) {
//     if(confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function showOkay() {
//     alert("You agreed");
// }

// function showCancel() {
//     alert("you canceled..")
// }

