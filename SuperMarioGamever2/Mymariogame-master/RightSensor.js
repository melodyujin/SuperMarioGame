class RightSensor extends Sensor{

    // this.x+this.width,  this.y+5
    tick(){
        this.x=mario.x+mario.width;
        this.y=mario.y+5;
    }
}