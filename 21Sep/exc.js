// var canvas;
// var ctx;
// var x = 284;
// var y = 130;
// var mx = 0;
// var my = 0;
// var WIDTH = 400;
// var HEIGHT = 400;

//             function circle(x,y,r) {
//               ctx.beginPath();
//               ctx.arc(x, y, r, 0, Math.PI*2, true);
//               ctx.fill();
//             }
              
//             function clear() {
//               ctx.clearRect(0, 0, WIDTH, HEIGHT);
//             }
              
//             function init() {
//               canvas = document.getElementById("myCanvas");
//               ctx = canvas.getContext("2d");
//               window.onkeydown = keydownControl;
//               return setInterval(draw, 10);
//             }
              
//             function draw() {
//               clear();
//               circle(x, y, 20);
              
//               if (x + mx > WIDTH || x + mx < 0)
//                     mx = -mx;
//               if (y + my > HEIGHT || y + my < 0)
//                     my = -my;
              
//               x += mx;
//               y += my;
              
//             }
              
//             function keydownControl(e) {
//                     if(e.keyCode==37) {
//                             mx = -2;
//                             my = 0;
//                     } else
//                     if (e.keyCode==38) {
//                             mx = 0;
//                             my = -2;
//                     } else if
//                     (e.keyCode==39) {
//                             mx = 2;
//                             my = 0;
//                     } else
//                     if (e.keyCode==40) {
//                             mx = 0;
//                             my = 2;
//                     }
//             }
              
//             init();

window.onload = function () {
    const canvas = document.getElementById('myCanvas')
    const con = canvas.getContext('2d')
    let ballX = 50;
    let ballY = 50;
 
 
 
    function draw() {
        con.fillStyle = "white";
        con.fillRect(0, 0, canvas.width, canvas.height);
 
        con.fillStyle = "yellow";
        con.beginPath();
        con.arc(ballX, ballY, 50, 0, 2 * Math.PI, true);
        con.closePath();
        con.fill();
    }
    draw()
 
    window.addEventListener('keydown', function (e) {
        if(ballX > 0 + 50) {
            if (e.keyCode == '37') {
                ballX-=5
                draw()
            }
        }
        if(ballX < canvas.width - 50) {
            if (e.keyCode == '39') {
                ballX+=5
                draw()
    
            }
        }
        if(ballY > 0 + 50) {
            if (e.keyCode == '38') {
                ballY-=5
                draw()
            }
        }
        if(ballY < canvas.height - 50) {
            if (e.keyCode == '40') {
                ballY+=5
                draw()
            }
        }
    })
    }