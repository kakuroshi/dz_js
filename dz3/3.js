"use strict";

const fNum = 2
const sNum = 5
const tNum = 23324
const foNum = 55

if (!isNaN(fNum) && isFinite(fNum) && !isNaN(sNum) && isFinite(sNum) && !isNaN(tNum) && isFinite(tNum) && !isNaN(foNum) && isFinite(foNum)) {
    if (fNum > sNum && fNum > sNum && fNum > foNum) {
        console.log("Наибольшее из чисел:",fNum);
    }

    else if (sNum > fNum && sNum > tNum && sNum > foNum) {
        console.log("Наибольшее из чисел:",sNum);
    }

    else if (tNum > fNum && tNum > sNum && tNum > foNum) {
        console.log("Наибольшее из чисел:",tNum);
    }

    else if (foNum > sNum && foNum > sNum && foNum > tNum) {
        console.log("Наибольшее из чисел:",foNum);
    }
} else {
    console.log("Введены неверные данные");
}