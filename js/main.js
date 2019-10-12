/* Função para iniciar o jogo */
function startGame() {

    /* Variavel acumuladora de pontuação, timer e velocidade */
    let points = 0;
    let timer = 20;

    /* Resetando mensagem de vencedor e perdedor ao iniciar um novo jogo */
    document.querySelector('.lose').classList.remove('lose-show');
    document.querySelector('.lose').classList.add('lose-hidden');
    document.querySelector('.win').classList.remove('win-show');
    document.querySelector('.win').classList.add('win-hidden');
    
    /* Desabilitando botão de start após iniciar o jogo */
    document.querySelector('button').setAttribute('disabled', 'disabled');

    /* Limpar pontuação e timer ao iniciar um novo jogo */
    let textScore = document.querySelector('.score');
    textScore.innerText = 0;
    let textTimer = document.querySelector('.timer');
    textTimer.innerText = 20;

    /* Remover instruções ao iniciar um novo jogo */
    document.querySelector('.instructions').classList.remove('instructions-show');
    document.querySelector('.instructions').classList.add('instructions-hidden');

    /* Define a area de renderiação do jogo */
    let screen = document.querySelector('canvas');
    let brush = screen.getContext('2d');

    brush.fillStyle = '#0012342A';
    brush.fillRect(0, 0, 800, 400);

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
        brush.clearRect(0, 0, 800, 400);
    }

    /* Função para definir as areas do alvo */
    function drawTarget(x, y) {
        draw(x, y, radius + 30, '#365880');
        draw(x, y, radius + 20, '#77acde');
        draw(x, y, radius + 10, '#f0d933');
        draw(x, y, radius, 'red');
        draw(x, y, radius - 5, '#ece5d5');
    }

    /* Função para sortear a área aleatória do alvo  */
    function draftPosition(area) {
        return Math.floor(Math.random() * area);
    }

    /* Função para atualizar a tela */
    function updateScreen() {
        clearScreen();
        xRandom = draftPosition(800);
        yRandom = draftPosition(400);

        drawTarget(xRandom, yRandom);

        timer -= 1;
        let score = document.querySelector('.timer');
        score.innerText = timer;
    }

    /* Função de tempo para atualizar a tela,
    caixas de dialogo para vencedor e perdedor e 
    Habilitando botão de start para iniciar um novo jogo */
    function stopGame() {
        if (timer == 0) {
            clearInterval(stopInterval);
            clearScreen();
            if (points == 0) {
                document.querySelector('.lose').classList.remove('lose-hidden');
                document.querySelector('.lose').classList.add('lose-show');
            } else if (points > 0) {
                document.querySelector('.win').classList.remove('win-hidden');
                document.querySelector('.win').classList.add('win-show');
            }
            document.querySelector('button').removeAttribute('disabled', 'disabled');
        }
    }

    let stopInterval = setInterval(() => {
        updateScreen();
        stopGame();
    }, 1200);
    
    /* Função para disparar o dardo no alvo e somar pontuação,
    obtendo a posição e comparando com o ponto do centro do alvo
    para saber se acertou */
    function shoot() {

        let x = event.pageX - screen.offsetLeft;
        let y = event.pageY - screen.offsetTop;

        if (x > xRandom - radius && x < xRandom + radius && y > yRandom - radius && y < yRandom + radius) {
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
window.onload = function () {
    let pressStart = document.querySelector('.start');
    pressStart.onclick = startGame;
<<<<<<< HEAD

    function generateRandomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
      
    function changeColor() {
        let colorTitle = document.querySelector('.how-to-play');
        colorTitle.style.color = generateRandomColor();
      }
    setInterval(changeColor, 500);
};
=======
};
>>>>>>> 007bfa8caaf8776c6ded1f4b65d9ecee46ab7cb5
