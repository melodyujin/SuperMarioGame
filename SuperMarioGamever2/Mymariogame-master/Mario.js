class Mario extends GameObject{

    constructor(container, src, width, height, x, y, velX,velY){
        super(container, src, width, height, x, y, velX,velY);

        this.falled=false;
        //container, width, height, x, y, bg
        this.leftSensor=new LeftSensor(this.container, 3,65, this.x-3, this.y+5, "red");
        this.rightSensor=new RightSensor(this.container, 3,65, this.x+this.width,this.y+5, "red");
        this.topSensor=new TopSensor(this.container, 65,3, this.x+5,this.y-3, "red");
        this.bottomSensor=new BottomSensor(this.container, 65,3, this.x+5,this.y+this.height, "red");


    }

    hitCheck(){
        for(let i=0;i<brickArray.length;i++){
            let result=collisionCheck(this,brickArray[i]);
            if(result){
                this.y=brickArray[i].y-this.height;
                this.falled=true;
            }
        }
        /*
        for(let i=0;i<coinArray.length;i++){
            let result=collisionCheck(this,coinArray[i]);
            if(result){
                this.container.removeChild(coinArray[i].img);
                let youIndex=coinArray.indexOf(coinArray[i]);
                coinArray.splice(youIndex,1);

                setScore();
            }
        }

        */

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

        //마리오 시선 처리 
        this.eyeSight();
        
        this.hitCheck();
    }
    
    render(){
        if(this.velY>8){
            this.velY=8;
        }
        //마리오의 위치를 화면밖으로 못 나가게 한다 
        if(this.x>=920){
            this.x=920;
        }
        if(this.x<0){
            this.x=0;
        }

        this.leftSensor.tick();
        this.leftSensor.render();
    
        this.rightSensor.tick();
        this.rightSensor.render();
    
        this.topSensor.tick();
        this.topSensor.render();
    
        this.bottomSensor.tick();
        this.bottomSensor.render();

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }    
}