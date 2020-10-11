let cronometro = 0;
let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 *box,
    y: 8 *box
}
let direction = "right";
let food = { /* criando ao array da comida da cobra*/
    x: Math.floor(Math.random() * 15 + 1)* box, /*Math Flor retira a parte flutuante do numero*/
    y: Math.floor(Math.random() * 15 + 1)* box
}

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
/*desenhando a comida da cobra */
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown',update); /*pegando o evento de clic do teclado KEYDOWN*/

function update (event){/* o numero 38,38 etc é referente ao evento de tecla respectivamente pra cima para baixo */
    if(event.keyCode == 37 && direction != "right") direction = "left"; /*se o evento for 37 (direita) a direção é DIREITA e assim para os demais && a direação NÃO FOR a rigth(esqueda) ai ele executa */
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";


}


function iniciarJogo(){
   
   if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
   if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
   if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
   if(snake[0].x <0 && direction == "up") snake[0].y = 16 * box;
  

   for (i = 1;  i < snake.length; i++){
       if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
           clearInterval(jogo);
           alert('Game Over :(')
           pararTempo();
       }
   }


    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; /*posições inciais nos eixos X e Y*/
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; /*se estiver indo para o lado esquerdo, no eixo X é acrescentado mais um quadrado no BOX */
    if(direction == "left") snakeX -= box; /*neste caso ela diminui quando for na direção direita */
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); /*retira o ultimo elemento do array */

    }else{ food.x = Math.floor(Math.random() * 15 + 1)* box,
        food.y= Math.floor(Math.random() * 15 + 1)* box
    }

   

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 200); /*setInterval faz  atualização do jogo a cada 100 milesegundos.*/

function iniciaTempo(){
    let minuto = document.getElementById('tempo_minuto');
    let segundo = document.getElementById('tempo_segundo');
    let decimo = document.getElementById('tempo_decimo');

    let m = 0 ; s = 0 ; d = 0;
    
    cronometro = setInterval(function(){
        minuto.innerHTML = m < 10 ? '0' + m:m;
        segundo.innerHTML = s < 10 ? '0' + s:s;
        decimo.innerHTML = d <10 ? '0' + d:d;

        if (d <9){
            d++;
        }else if(s < 59){
            d = 0;
            s ++
        }else if(m<59 ){
            d = 0;
            s = 0;
            m ++;
        }

    },100)
   
}
 function pararTempo(){
    clearInterval(cronometro);
    document.getElementById('timer_minuto').innerHTML = "00";
    document.getElementById('timer_segundo').innerHTML = "00";
    document.getElementById('timer_decimo').innerHTML = "00";
}
 


