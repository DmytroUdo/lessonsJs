"use strict";
// let num = 10;
// function showFirstMasage (text) {
//   console.log(text);
//   let   num = 20;
//     console.log(num);
// }
// showFirstMasage("Hello World!");
// console.log(num);


// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(42, 33));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// let calc2 = function(a, b) {
//     return a + b;
// }
// console.log(calc2(5, 6));
// console.log(calc2(50, 6));

// const calc3 = (a, b) => a + b;
// console.log(calc3(5, 6));
// console.log(calc3(50, 6));


// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     return curr * amount;
// }
// convert(500, usdCurr);
// console.log(convert(500, usdCurr));
// console.log(convert(500, eurCurr)); 


const usdCurr = 28;
const dicont = 0.9;
function convert(amount, curr) {
    
   return curr * amount;
}


function promotion(result) {
    console.log(result*dicont);
}
const res = convert(500, usdCurr);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log("Done");
}
test();