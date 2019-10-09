
//let points = 0;

    function startGame(){
        // debugger;
        let screen = document.querySelector(".gamescreen");
        /* canvasScreen.value("width", 1000);
        canvasScreen.value("heigth", 500); */
        screen.innerHTML = `<canvas width="1000" heigth="500"></canvas>`;
    }



    window.onload = function(){
        let pressStart = document.querySelector('.start');
        pressStart.onclick = startGame;
    };











    // let brush = screen.getContext('2d');

    // brush.fillStyle = 'red';
    // brush.fillRect(0, 0, 1000, 500);

    // let radius = 50;
    // let xRandom;
    // let yRandom;

    // function draw(x, y, radius, color) {

    //     brush.fillStyle = color;
    //     brush.beginPath();
    //     brush.arc(x, y, radius, 0, 2 * Math.PI);
    //     brush.fill();
    // }

    // function clearScreen() {
    //     brush.clearRect(0, 0, 1000, 500);
    // }

    // function drawTarget(x, y){
    //     draw(x, y, radius + 20, 'red');
    //     draw(x, y, radius + 10, 'white');
    //     draw(x, y, radius, 'red');
    // }

    // function draftPosition(max) {
    //     return Math.floor(Math.random() * max);
    // }

    // function updateScreen(){
    //     clearScreen();
    //     xRandom = draftPosition(1000);
    //     yRandom = draftPosition(500);

    //     drawTarget(xRandom, yRandom);
    // }

    // setInterval(updateScreen, 2000);

