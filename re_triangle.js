/*거꾸로 삼각형을 만들어보자

****
***
**
*

아이디어 1) count 횟수만큼 한줄에 *이 찍힌다.
아이디어 2)count를 한차례씩 minus 시킬 것. while 문을 이용.


*/


//아이디어 1 실현

let count =4;

function drawStar(count){
  let message = "";
  let star = "*";

  for (i=1; i<=count; i++){
    message =message + star;
  }  
  console.log(message);
}


//아이디어 2 실현
while(count!==0){
  drawStar(count);
  count-=1;
}




