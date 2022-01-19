const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [A, B] = input.map((item) => {return Number(item)});

if (A>B){
    console.log('>');
}
else if(A<B){
    console.log('<');
}
else {
    console.log('==');
}