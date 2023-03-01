"use strict";

const array = [0, 'Серёжа', "Vilson", undefined, 33, '', false, null]

function clearArray(array) {
    let cleanArray = [];

    for (let i = 0; i < array.length; i++) {
        array[i] ? cleanArray.push(array[i]) : i

    }
    return cleanArray
}

console.log(clearArray(array));