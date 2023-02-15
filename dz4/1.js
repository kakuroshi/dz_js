"use strict";

const num = [1112222, -22222222, 223133325, 1, 3, 332, 323, 134512344, 30, -313124124];
let maxNum = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNum) {
        maxNum = num[i]
    }
}
console.log(maxNum)