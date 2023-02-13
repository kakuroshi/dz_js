"use strict";

const fNum = 1233
const sNum = 52525211267

let operation = "*"

if (!isNaN(fNum) && isFinite(fNum) && !isNaN(sNum) && isFinite(sNum)) {
    switch (operation) {
        case "+":
            console.log(fNum + sNum);
            break;
        case "-":
            console.log(fNum - sNum);
            break;
        case "*":
            console.log(fNum * sNum);
            break;
        case "/":
            console.log(sNum / sNum);
            break;
    }
} else {
    console.log("Введены неверные данные");
}