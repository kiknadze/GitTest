// დავალება 1
// let login = prompt("Enter login");
// if (login == "Admin") {
//     let password = prompt("Enter password");
//     if (password == "TheMaster") {
//         alert("Welcome");
//     } else {
//         if(password == "" || password == null) {
//             alert("Canceled");
//         } else {
//             alert("Wrong password");
//         }
//     }
// } 
// else {
//     if(login == "" || login == null) {
//         alert("Canceled");
//     } else {
//     alert("I don't know u");
// }
// }

// დავალება 2

// let year = prompt('year?');
// if(year % 4 == 0 && (!(year % 100 == 4) || year % 400 == 0)) {
//     alert("egaa");
// } else {
//     alert("eg araa");
// }

// დავალება 3
// let browser = prompt("brawser?");

// if(browser == 'Edge') {
//     alert('You have got the edge');
// } else if (browser == 'Chrome' || browser == 'Chrome' || browser == 'safari' || browser == 'opera') {
//     alert('Okay we support thes browser too');
// } else {
//     alert('we hope that this page looks ok!')
// }


// დავალება 4
// let number = Number(prompt("First Number"));
// let number1 = Number(prompt("Second Number"));
// let operator = (prompt("Operator"));

// switch (operator) {
//     case '+':
//     alert(number+number1);
//     break;

//     case '-':
//     alert(number-number1);
//     break;

//     case '/':
//     alert(number / number1);
//     break;

//     case '*':
//     alert(number * number1);
//     break;
// } 


// დავალება 5
// let num = prompt("enter number");
// while (isNaN(num)) 
// {
//     num = Number(prompt("scade tavidan"));
// }


// დავალება 6
// let nam = Number(prompt("Shemoitane cipri"));
// let nam1 = 0;
// while(nam>0) {
//     nam1+=nam % 10;
//     nam=(nam-(nam % 10)) / 10;
// }

// alert(nam1);

// დავალება 7
// let num = Number(prompt("Shemoitane cipri"));
// let num1 = Number(prompt("Shemoitane cipri 2"));
// for(num; num<=num1; num++) {
//     if(num % 2 == 0){
//         document.writeln(num+',');
//     }
// }


// დავალება 8 for da while ciklit
// let num = Number(prompt("Shemoitane cipri"));
// let c = num;
// while(c > 0){
//     for(let j = 0; j<num; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
//     c--;
// }

// დავალება 8 for ciklit
// let num = Number(prompt("Shemoitane cipri"));
// for(let i=0; i<num; i++) {
//     for(let j=0; j<num; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }