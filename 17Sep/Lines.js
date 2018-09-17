window.onload = function(){
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');

    context.strokeStyle = 'red';
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(150, 20);
    context.lineTo(75, 200);
    context.lineTo(225, 200);
    context.lineTo(150, 20);

    context.lineJoin = 'round'; //bevel miter
    context.lineCap = 'round'; //butt

    context.closePath();
    context.stroke();
    context.fillStyle='black';
    context.fill();
    
    
}