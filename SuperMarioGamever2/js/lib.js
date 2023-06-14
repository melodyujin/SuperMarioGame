        //최소값부터~최대값까지의 랜덤을 구하는 함수
        //2와 5 사이의 랜덤값을 원하면 호출시 getRandomByRange(2,5)
        function getRandomByRange(min,max){
            let result=min+parseInt(((max-min)+1)*Math.random());
            return result;
        }

//두 물체간의 충돌체크
function collisionCheck(me, you){

    let result1=((me.x +me.width) >= you.x)  &&  ((me.y+me.height) >= you.y)
    let result2=(me.x+me.width >= you.x) && (me.y <= you.y + you.height)
    let result3=(me.x <= you.x + you.width) && (me.y+me.height >= you.y) 
    let result4=(me.x <= you.x + you.width)  && (me.y <= you.y + you.height)

    return(result1 && result2 && result3 && result4);
/*
조건1)
red 의 x축+너비가 green 의 x축을 넘어서고 red 의 y 축+높이값이 green의 y축을 넘어서면
(red.x +red.width) >= green.x  &&  (red.y+red.height) >= green.y

조건2) 
red 의 x축+너비가 green 의 x축을 넘어서면 
red.x+red.width >= green.x
&&
red 의 y 축값이 green의 y축+높이 보다 작거나 같아지면
red.y <= green.y + green.height

조건3) 
red의 x축이  green의 x축+너비한 값보다 같거나 작아지면...
red.x  <= green.x + green.width

red의 y축+높이가 green의 y축 이상이 되면...
red.y+red.height >= green.y

조건4) 
red의 x축값이 green 의 x축+너비 보다 작아지면
red.x <= green.x + green.width 

red의 y축값이 green 의 y 축+높이보다 작아지면 
red.y <= green.y + green.height
*/
}