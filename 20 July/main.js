// let body = document.body;
// let myDiv = body.firstElementChild;
// console.log(myDiv)
// let  childNodes = body.childNodes;
// console.log(myDiv.nextElementSibling)
// console.log(myDiv.nextElementSibling.firstElementChild.nextElementSibling)


let body = document.body;
let myDiv = body.firstElementChild;
for(let i=2; i<=myDiv.children.length; i+=6) {
    myDiv.children[i].style.backgroundColor='red';
}
for(let i=3; i<=myDiv.children.length; i+=6) {
    myDiv.children[i].style.backgroundColor='red';
}
for(let i=12; i<=23; i++) {
    myDiv.children[i].style.backgroundColor='green';
}

myDiv.children[14].style.backgroundColor='red';
myDiv.children[21].style.backgroundColor='red';