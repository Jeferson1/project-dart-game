
// debugger;



/* Função para iniciar o jogo */
 function startGame(){

/* Variavel acumuladora de pontuação e timer */    
    let points = 0;
    let timer = 20;

/* Define a area de renderiação do jogo */
    let screen = document.querySelector('canvas');
    let brush = screen.getContext('2d');
    
    brush.fillStyle = '#12342A';
    brush.fillRect(0, 0, 1000, 400);

/* Variaveis para desenhar o alvo e gerar aleatoriamente  */
    let radius = 20;
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
        brush.clearRect(0, 0, 1000, 400);
    }

/* Função para definir as areas do alvo */
    function drawTarget(x, y){
        draw(x, y, radius + 30, 'red');
        draw(x, y, radius + 20, 'white');
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
        yRandom = draftPosition(400);

        drawTarget(xRandom, yRandom);
        
        timer -= 1;
        let score = document.querySelector('.timer');
        score.innerText = timer;
    }

/* Função de tempo para atualizar a tela */
    
    function stopGame(){
        if(timer === 0){
        clearInterval(stopInterval);
        clearScreen();

        }
    }

    let stopInterval = setInterval(() => {
        updateScreen();
        stopGame();
    }, 1000);

//===========================================================   

/* Função para disparar o dardo no alvo e somar pontuação,
obtendo a posição e comparando com o ponto do centro do alvo
para saber se acertou */    
    function shoot(event){
        
        var x = event.pageX - screen.offsetLeft;
        var y = event.pageY - screen.offsetTop;

        if ((x > xRandom - radius)
            &&(x < xRandom + radius)
            &&(y > yRandom - radius)
            &&(y < yRandom + radius)){

        clearScreen();
        
        points += 1;
        let score = document.querySelector('.score');
        score.innerText = points;
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