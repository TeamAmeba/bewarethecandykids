function titleState(container){
    var music;
    var self = this;
    this.container = container;
    this.value = 'gameState';
    container.state = this;
    this.next = function(_state){
        canvas.removeEventListener('click', onClick, false);
        if(_state == "difficultyState"){
            return new difficultyState(self);
        }else if(_state == "creditState"){
            return null;
        }
    }

    var canvas,
        canvasLeft,
        canvasTop,
        ctx;

    var playButton;
    var creditsButton;

    function create(){
        canvas = document.getElementById('gameCanvas');
        canvasLeft = canvas.offsetLeft;
        canvasTop = canvas.offsetTop;
        ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        playButton = new Button(playButtonUI, canvas.width/2-playButtonUI.width/2, canvas.height/2.3-playButtonUI.height/2, canvas);

        creditsButton = new Button(creditsButtonUI, canvas.width/2-playButtonUI.width/2, canvas.height/1.7-playButtonUI.height/2, canvas);
    
        canvas.addEventListener("click", onClick, false);

        music = ost[0];
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        },false);
        music.volume = 0.02*4.3 ;
        music.play();

        draw();
    }

    function draw(){
        ctx.drawImage(fondoOscurecidoUI, 0, 0);
        ctx.drawImage(placeholderUI, canvas.width/2-placeholderUI.width/2, canvas.height/2-placeholderUI.height/2);

        playButton.draw();
        creditsButton.draw();
    }

    function onClick(event){
        music.pause();
        var x = event.pageX - canvasLeft,
        y = event.pageY - canvasTop;
        if((x > playButton.x && x < playButton.x + playButton.width) && (y > playButton.y && y < playButton.y + playButton.height)){
            currentState.state = currentState.changeState("difficultyState");
        }else if((x > creditsButton.x && x < creditsButton.x + creditsButton.width) && (y > creditsButton.y && y < creditsButton.y + creditsButton.height)){
            currentState.state = currentState.changeState("creditState");
        }
    }

    create();
}



