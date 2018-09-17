/* 

if(Modernizr.canvas) {
    // supported
}
else {
    //bad
}
*/

window.onload = function(){
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.strokeStyle='black';
    
    context.fillRect(10, 20, 200, 100);
}