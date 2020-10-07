let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 *box,
    y: 8 *box
}
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);
}


function criarCobrinha(){
    for (i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown',update); /*pegando o evento de clic do teclado */

function update (event){/* o numero 38,38 etc é referente ao evento de tecla respectivamente pra cima para baixo */
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";


}


function iniciarJogo(){
    

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);



