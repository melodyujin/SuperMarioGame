class RightSensor extends Sensor{
    //this.x+this.width,this.y+20
    tick(){
        this.x=mario.x+mario.width;
        this.y=mario.y+30;
    }
}