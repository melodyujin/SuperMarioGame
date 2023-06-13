class Mario extends GameObject{

    constructor(container, src, width, height, x, y, velX,velY){
        super(container, src, width, height, x, y, velX,velY);

        this.falled=false;
        //container, width, height, x, y, bg
        this.leftSensor=new LeftSensor(this.container, 3,60, this.x+3,this.y+25, "red");
        this.rightSensor=new RightSensor(this.container, 3,50, this.x+this.width,this.y+30, "red");
        this.topSensor=new TopSensor(this.container, 50,3, this.x+20,this.y-4, "red");
        this.bottomSensor=new BottomSensor(this.container, 70,3, this.x+10,this.y+this.height, "red");
    }

    hitCheck(){
        for(let i=0;i<brickArray.length;i++){
            let result=collisionCheck(this,brickArray[i]);

            if(result){
                this.y=brickArray[i].y-this.height;
                this.falled=true;
            }
        }
    }

    tick(){
        //this.velY+=g;
        //console.log(this.velY);

        this.x+=this.velX;
        this.y+=this.velY;

        //마리오가 보유한 센서막대들에 대해서도 tick()
        /*
        this.leftSensor.tick();
        this.leftSensor.render();

        this.rightSensor.tick();
        this.rightSensor.render();

        this.topSensor.tick();
        this.topSensor.render();

        this.bottomSensor.tick();
        this.bottomSensor.render();
        */

        this.hitCheck();
    }
}