class BottomSensor extends Sensor{
    
    tick(){
        this.x=mario.x+10;
        this.y=mario.y+mario.height;
    }
}