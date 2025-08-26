"use strict";

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola  && fries); // 1 - true, 0 - false

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && "Hello"); // 0
// console.log(1 && 2 && 3); // 3
// console.log(1 && 2 && null && 3); // null
// console.log(1 && 2 && 3 && 0 && 4); // 0
// console.log(1 && 2 && 3 && 4); // 4 

// if (hamburger === 3  && fries === 1 && cola === 1) {
//     console.log("Done!");
// }   else {
//     console.log("Not today!");
// }


// Тут використовуються логічні оператори:
// && ("І") – обидві умови мають бути істинними, інакше повертає false.
// || ("АБО") – достатньо, щоб хоча б одна умова була істинною.

// if (hamburger && cola || fries && cola) {
//     console.log("Done!");
// } else {
//     console.log("Not today!");
// }   



const hamburger = 3;
const fries = 2;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && fries  === 2 ||  cola === 2 && nuggets) {
    console.log("Done!");
}   else {
    console.log("Not today!");
}

console.log(hamburger === 3 && fries  === 2 ||  cola === 2 && nuggets); // true 


let johnReport, alexReport, samReport, mariaReport = "done";
console.log(johnReport || alexReport || samReport || mariaReport); // done


console.log(!0); // true
console.log(!1); // false
console.log(!!1); // true
console.log(!!0); // false      