// "use strict"

// // let  num = 50

// // while (num <= 55) {
// //     console.log(num);
// //     num++
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);   

// // for (let i = 1; i < 10; i++) {
// //     if (i === 6) {
// //          break;
// //         // continue;
// //     }
// //     console.log(i);
// // }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);


//     }

// }

// let result = '';
// const length = 17;
// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";

//     }
//     result += '\n';
// }

// console.log(result);


// first:for (let i = 5; i <= 10; i++) { 
//     console.log(`first level:  ${i}`);
//     for (let j = 5; j <= 10; j++) {
//         console.log(`second level:  ${j}`);
//         for (let k = 5; k <= 10; k++) {

//             if (k === 2) continue first;
//             console.log(`third level:  ${k}`);

//         }
//     }
// }


// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for(let  i= 5; i < 11;i++ ) {
        console.log(i)
    }
    
    
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i)
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

while (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
   } else {
       console.log(i);
    }
 }

function fourthTask() {
    // Пишем решение вот тут
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return arrayOfNumbers;
}