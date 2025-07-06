// q1
console.log("Quiz 1");

const x = 15;
const y = 20;

let max = x>y? x:y;

console.log(max);

// q2
console.log("Quiz 2");

const a = true;

let type = typeof a;

switch(type){
    case "string" :
        console.log("문자열")
        break;
    case "number" :
        console.log("숫자")
        break;
    case "boolean" :
        console.log("불리언")
        break;
    }

// q3
console.log("Quiz 3");

let temperature = 10;

if(temperature < 0) {
    console.log("매우 추움")
}
else if(temperature < 10) {
    console.log("추움.")
}
else if(temperature < 20) {
    console.log("적당")
}
else {
    console.log("더움")
}