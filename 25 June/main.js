// function Calculator() {
    
//     let operaciebi = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b
//     };

//     this.calculate = function(str) {
//         this.operacia = str.split(" "),
//         this.num1 = Number(this.operacia[0]);
//         this.num2 = Number(this.operacia[2]);
//         this.oper = this.operacia[1];
        
//         return operaciebi[this.oper](this.num1, this.num2)
//         }

//         this.addMethod = function(name, func) {
//             operaciebi[name] = func;
//           };
//     }



// let calc = new Calculator();
// alert(calc.calculate("3 + 7"));

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert(result);


// let str = "my string example";

// console.log(str.includes('my'))  //true

// console.log(str.startsWith('example')) //false
// console.log(str.startsWith('my')) //true
// console.log(str.endsWith('example')) //true

// let sliced = str.slice(0, 3);
// console.log(`sliced ${sliced.trim()}`);

// let subString = str.substring(0, 6);
// console.log(`substring - ${subString}`);

// let subStr = str.substr(0, 3); //
// console.log(`substring - ${subStr}`)


// ---------------------------------დავალება 1----------------------------------------
// function checkSpam(str) {

//     if(str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) 
//     return true;
//     return false;
// }

// alert(checkSpam('buy ViAgra Now'));
// alert(checkSpam('free XXXX'));
// alert(checkSpam('innocent rabbit'));

// ---------------------------------დავალება 1----------------------------------------

//---------------------------------დავალება 2----------------------------------------
// function truncate(str, maxlength) {
//     if(str.length > maxlength) 
//         return str.slice(0, maxlength).concat('...');
//         return str;
// }

// alert(truncate("What I'd like to tell on this topic is:", 20));
// alert(truncate("What everyone", 20));
//---------------------------------დავალება 2----------------------------------------


/*
DOCUMENT_NODE
ELEMENT_NOE - <body> <a> <p> ....
ATTRIBUTE_NODE - class="ohoo"
TEXT_NODE - ნებისმიერი დაშორება ფაილში.
DOCUMENT_TYPE_NODE - <!Doctype html>
DOCUMENT_FRAGMENT_NODE - document.createDocumentFragment()
*/

// console.log(Node.DOCUMENT_NODE)
// console.log(Node.ATTRIBUTE_NODE)
// console.log(Node.TEXT_NODE)

// //OBJECT > Node > Element > HTML*Element

// let nodeAnchor = document.querySelector('a');
// let props = [];

// for ( let key in nodeAnchor ) {
//     props.push(key);
// }

// console.log(props.sort())

/*

Node Properties:

    childNodes
    fisrtChild
    lastChild
    nextSibling
    previousSibling
    nodeName
    nodeType
    nodeValue
    parentNode

Node Methods:
    appendChild(node)
    cloneNode()
    contains(node)
    hasChildNodes()
    insertBefore(node)
    isEqualNode()
    removeChild(node)
    replaceChild(node)

Document Methods:
    document.createElement('tag')
    document.createTextNode('string')

HTML * Element Properties:
    innerHTML
    outerHTML
    textContent
    innerText
    outerText
    firstElementChild
    lastElementChild
    nextElementChild
    previousElementChild
    children

*/

// let div = document.createElement('div');
// let text = document.createTextNode('text node example')
// div.appendChild(text)

// document.body.appendChild(div);


//---------------------------------------DOM ELEMENT SELECTION---------------------

//document.querySelector('css selector!!!')
//document.querySelectorALL('css selector!!!');

//document.getElementById();

// let menuItem = document.getElementById('menu');
// console.log(menuItem)

// let menus = document.getElementsByClassName('menu');
// console.log(menus);

let menuItem = document.querySelector('a');
console.log(menuItem.matches('#menu'))