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

    //마리오가 쳐다볼 방향 
    eyeSight(){
        if(isRight){
            this.img.style.transform="scaleX(1)";
        }else{
            this.img.style.transform="scaleX(-1)";
        }
    }

    tick(){
        this.velY+=g;
        //console.log(this.velY);

        this.x+=this.velX;
        this.y+=this.velY;

        //마리오의 위치를 화면밖으로 못 나가게 한다 
        if(this.x>=920){
            this.x=920;
        }
        if(this.x<0){
            this.x=0;
        }

        //마리오 시선 처리 
        this.eyeSight();


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