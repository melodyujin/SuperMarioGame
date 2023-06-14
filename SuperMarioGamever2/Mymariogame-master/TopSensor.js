class TopSensor extends Sensor{
    

    //this.x+5,this.y-3
    tick(){
        this.x=mario.x+5;
        this.y=mario.y-3;
    }

    //머리에 뭔가 닿으면, 마리오의 위치를 그 닿은 물체의 하단에 놓는다
    hitCheck(){
        for(let i=0;i<brickArray.length;i++){
            let result = collisionCheck(this,  brickArray[i]);

            if(result){ //머리가 닿음
                console.log("머리가 닿앗어");
                
                mario.y=brickArray[i].y + brickArray[i].height+10;
                console.log(brickArray[i].y + brickArray[i].height+10);
                //break;
            }
        }
    }

    render(){

        //충돌체크
        this.hitCheck();
        
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

    }    
}