
// debugger;

/* Variavel acumuladora de pontuação */
let points = 0;

/* Função para iniciar o jogo */
 function startGame(){

/* Define a area de renderiação do jogo */
    let screen = document.querySelector('canvas');
    let brush = screen.getContext('2d');
    
    brush.fillStyle = '#12342A';
    brush.fillRect(0, 0, 1000, 500);

/* Variaveis para desenhar o alvo e gerar aleatoriamente  */
    let radius = 10;
    let xRandom;
    let yRandom;

/* Função para desenhar alvo */    
    function draw(x, y, radius, color) {

        brush.fillStyle = color;
        brush.beginPath();
        brush.arc(x, y, radius, 0, 2 * Math.PI);
        brush.fill();
    }

/* Função para limpar a tela  */
    function clearScreen() {
        brush.clearRect(0, 0, 1000, 500);
    }

/* Função para definir as areas do alvo */
    function drawTarget(x, y){
        draw(x, y, radius + 20, 'red');
        draw(x, y, radius + 10, 'white');
        draw(x, y, radius, 'red');
    }

/* Função para sortear a área aleatória do alvo  */
    function draftPosition(max) {
        return Math.floor(Math.random() * max);
    }

/* Função para atualizar a tela */
    function updateScreen(){
        clearScreen();
        xRandom = draftPosition(1000);
        yRandom = draftPosition(500);

        drawTarget(xRandom, yRandom);
    }

/* Função de tempo para atualizar a tela */
    setInterval(updateScreen, 1500);

/* Função para disparar o dardo no alvo e somar pontuação */    
    function shoot(event){
        
        var x = event.pageX - screen.offsetLeft;
        var y = event.pageY - screen.offsetTop;

        if ((x > xRandom - radius)
            &&(x < xRandom + radius)
            &&(y > yRandom - radius)
            &&(y < yRandom + radius)){

        points += 1;

       }
    }

/* Evento para capturar e chamar função de disparar o dardo */    
    screen.onclick = shoot;
}

/* Carregar a tela do jogo */
window.onload = function(){
    let pressStart = document.querySelector('.start');
    pressStart.onclick = startGame;
};