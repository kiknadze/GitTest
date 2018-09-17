let canvas, context;
window.onload = function(){
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');

    let img = new Image();
    img.onload = function(){
        drawImage(img);
    }
    img.src = 'HTML5.jpeg'
}

function drawImage(img){
    let destX = 10;
    let destY = 20;

    let destWidth = 212;
    let destHeight = 212;
    context.drawImage(img, destX, destY, destWidth, destHeight)
}

function showCanvasAsImage(){
    let dataUrl = canvas.toDataURL();
    window.open(dataUrl, 'Canvas As Image', 'width=600, height=600')
    
}