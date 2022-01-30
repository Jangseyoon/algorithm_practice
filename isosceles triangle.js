/*거꾸로 삼각형을 만들어보자
____*____
___***___
__*****__
_*******_

아이디어 1) count 횟수만큼 한줄에 _이 찍히는 함수를 만든다. 이후 문자열 리턴
아이디어 2)라인이 n일 때 2n-1로 홀수 크기만큼의 *이 찍히는 함수를 만든다.
아이디어 2)count를 한차례씩 minus 시킬 것. while 문을 이용.


*/


//아이디어 1 실현
function drawBlank(count){
  let message = "";
  let blank = "_";

  for (i=1;i<=count;i++){
    message = message + blank;
  }  
  return message;
}


//아이디어 2 실현. 각 줄의 line은 1부터 센다.
function drawStar(line){
  let message = ""
  let star = "*";
  let star2 = "**"

  if (line === 1){
    message = message + star;
    return message;
  }
  else{
    message = message + star;
    for (j=1;j<=line-1;j++){    //2번째줄부턴 j<=line이면 한 회차 더 "**"가 더해져버림. *****
      message = message + star2;
    }
    return message;
  }
}


//아이디어 3 실현
function runCode(count){
  let line = 1;
  while (count!==0){
    let result = drawBlank(count)+drawStar(line)+drawBlank(count);
    console.log(result);
    count--;
    line ++;
  }
};


//test
runCode(7);