"use strict";


let array = [1, 1, 1, "гё", "Kirill", "Kirill", 88, 213, 213, 88, 88]

function includesCheck(array) {
    let cleanArray = [];

    for (let i = 0; i < array.length; i++) {

        !cleanArray.includes(array[i]) ? cleanArray.push(array[i]) : i
    }

    return cleanArray;
}

console.log(includesCheck(array));