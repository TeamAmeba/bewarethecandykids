var currentState;

function HeadingState(){
    var self = this;
    this.state = new loaderState(self);
    this.changeState = function(_state){
        return self.state.next(_state);
    }
}

window.onload = function(){
    currentState = new HeadingState();
}