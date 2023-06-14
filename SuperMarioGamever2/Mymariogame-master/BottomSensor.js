class BottomSensor extends Sensor{
    

    // this.x+5,this.y+this.height
    tick(){
        this.x=mario.x+5;
        this.y=mario.y+mario.height-3;
    }
}