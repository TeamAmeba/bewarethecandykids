function titleState(container){

    var self = this;
    this.container = container;
    this.value = 'gameState';
    container.state = this;
    this.next = function(_state){
        if(_state == "gameState"){
            return new gameState(self);
        }else if(_state == "optionState"){
            return null;
        }
    }

    var canvas,
        canvasLeft,
        canvasTop,
        ctx;

    var playButton;
    var optionButton;

    function create(){
        canvas = document.getElementById('gameCanvas');
        canvasLeft = canvas.offsetLeft;
        canvasTop = canvas.offsetTop;
        ctx = canvas.getContext('2d');

        playButton = new Button("PLAY", "#2bd5a2", 100, 200, 100, 50, canvas);
        playButton.draw();

        optionButton = new Button("OPCIONES", "#2bd5a2", 100, 275, 150, 50, canvas);
        optionButton.draw();
    
        canvas.addEventListener("click", onClick, false);
    }

    function onClick(){
        var x = event.pageX - canvasLeft,
        y = event.pageY - canvasTop;
        console.log(x + ":" + y);
        if((x > playButton.x && x < playButton.x + playButton.width) && (y > playButton.y && y < playButton.y + playButton.height)){
            currentState.state = currentState.changeState("gameState");
        }else if((x > optionButton.x && x < optionButton.x + optionButton.width) && (y > optionButton.y && y < optionButton.y + optionButton.height)){
            currentState.state = currentState.changeState("gameState");
        }
    }

    create();
}


