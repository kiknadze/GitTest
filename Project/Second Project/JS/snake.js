const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// create the food class
class Food {
    constructor(foodImg, x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.foodImg = new Image();
        this.foodImg.src = foodImg;
        this.food = {
            x : Math.floor(Math.random()*this.x+1) * this.size,
            y : Math.floor(Math.random()*this.y+3) * this.size
        };
    }

    createFood(){
        return this.food = {
            x : Math.floor(Math.random()*this.x+1) * this.size,
            y : Math.floor(Math.random()*this.y+3) * this.size
        };
    }

    draw(){
        ctx.drawImage(this.foodImg, this.food.x, this.food.y);
    }

}

// create the snake class
class Snake {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.snakear = [];
    }
    start(){
        this.snakear.push({
            x : this.x * this.size,
            y : this.y * this.size
        })
    }

    draw(){
        for( let i = 0; i < this.snakear.length ; i++){
            ctx.fillStyle = ( i == 0 )? "green" : "white";
            ctx.fillRect(this.snakear[i].x,this.snakear[i].y,box,box);
            
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.snakear[i].x,this.snakear[i].y,box,box);
        }
    }

    newHead(newhead){
        this.snakear.unshift(newhead)
    }

    removeTail(){
        this.snakear.pop()
    }
    
}
let snake = new Snake(9, 10, box);
snake.start()

let fooding = new Food("Img/apple.png", 17, 15, box)

// create the score var
let score = 0;

//control the snake
let d;
document.addEventListener("keydown",direction);
function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
       
        d = "LEFT";
    } else if(key == 38 && d != "DOWN"){
        d = "UP";
      
    } else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
      
    } else if(key == 40 && d != "UP"){
        d = "DOWN";
        
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}
let loop = 0;
// draw everything to the canvas
function draw(){
    let id = requestAnimationFrame(draw)
    if (++loop < 9) {
        return
    }
    loop = 0;
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    
    snake.draw();
    fooding.draw();
    
    // old head position
    let snakeX = snake.snakear[0].x;
    let snakeY = snake.snakear[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == fooding.food.x && snakeY == fooding.food.y){
        score+=10;
        fooding.createFood();
        // we don't remove the tail
    }else{
        // remove the tail
        snake.removeTail();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < 0 || snakeX > 18 * box || snakeY < 2*box || snakeY > 18*box || collision(newHead,snake.snakear)){
        // clearInterval(game)
        cancelAnimationFrame(id)
        alert('game over')
    }
    
    snake.newHead(newHead);

    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.drawImage(fooding.foodImg, box-10, box-15);

    ctx.beginPath();
    ctx.fillText(score,2*box,1.6*box);
    ctx.strokeStyle="black";
    ctx.lineWidth=5;
    ctx.moveTo(0, 64);
    ctx.lineTo(608, 64);
    ctx.closePath();
    ctx.stroke();
}

draw()
// let game = setInterval(draw, 100);

