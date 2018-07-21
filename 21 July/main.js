//საათის დავალება
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    clock.innerHTML = t;
}
timemy.addEventListener('focusout', ({target}) => {
    setTimeout(() => {return clearInterval(myVar)}, target.value*1000)
})

cont.addEventListener('click', function() {
    myVar = setInterval(myTimer, 1000);
})



//დავალება 2
mybtn.addEventListener('click', function() {
    document.getElementById(idDiv.value).style.color = color.value;
    document.getElementById(idDiv.value).style.textAlign = textalign.value;
    document.getElementById(idDiv.value).style.fontSize = font.value;

})






