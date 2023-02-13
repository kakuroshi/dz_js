"use strict";

const fNum = 123
const sNum = 2132133
const tNum = 1342636123
const foNum = 111111111111111111

if (!isNaN(fNum) && isFinite(fNum) && !isNaN(sNum) && isFinite(sNum) && !isNaN(tNum) && isFinite(tNum) && !isNaN(foNum) && isFinite(foNum)) {
    if (fNum > sNum && fNum > tNum && fNum > foNum) {
        console.log("Первое число:",fNum);

        if (sNum > tNum && sNum > foNum) {
            console.log("Второе число:", sNum);

            if (tNum > foNum) {
                console.log("Третье число:", tNum);
                console.log("Четвертое число:", foNum);
            }
            else {
                console.log("Третье число:",foNum);
                console.log("Четвертое число:",tNum);
            }
        }
        else if (tNum > sNum && tNum > foNum) {
            console.log("Второе число:", tNum);

            if (sNum > foNum) {
                console.log("Третье число:", sNum);
                console.log("Четвертое число:", foNum);
            }
            else {
                console.log("Третье число:",foNum);
                console.log("Четвертое число:",sNum);
            }
        }
        else if (foNum > sNum && foNum > tNum) {
            console.log("Второе число:", foNum);

            if (sNum > tNum) {
                console.log("Третье число:", sNum);
                console.log("Четвертое число:", tNum);
            }
            else {
                console.log("Третье число:",tNum);
                console.log("Четвертое число:",sNum);
            }
        }
    }

    if (sNum > fNum && sNum > tNum && sNum > foNum) {
        console.log("Первое число:",sNum);

        if (fNum > tNum && fNum > foNum) {
            console.log("Второе число:", fNum);

            if (tNum > foNum) {
                console.log("Третье число:", tNum);
                console.log("Четвертое число:", foNum);
            }
            else {
                console.log("Третье число:",foNum);
                console.log("Четвертое число:",tNum);
            }
        }
        else if (tNum > fNum && tNum > foNum) {
            console.log("Второе число:", tNum);

            if (fNum > foNum) {
                console.log("Третье число:", fNum);
                console.log("Четвертое число:", foNum);
            }
            else {
                console.log("Третье число:",foNum);
                console.log("Четвертое число:",fNum);
            }
        }
        else if (foNum > fNum && foNum > tNum) {
            console.log("Второе число:", foNum);

            if (fNum > tNum) {
                console.log("Третье число:", fNum);
                console.log("Четвертое число:", tNum);
            }
            else {
                console.log("Третье число:",tNum);
                console.log("Четвертое число:",fNum);
            }
        }
    }

    if (tNum > fNum && tNum > sNum && tNum > foNum) {
        console.log("Первое число:",tNum);

        if (fNum > sNum && fNum > foNum) {
            console.log("Второе число:", fNum);

            if (sNum > foNum) {
                console.log("Третье число:", sNum);
                console.log("Четвертое число:", foNum);
            }
            else {
                console.log("Третье число:",foNum);
                console.log("Четвертое число:",sNum);
            }
        }
        else if (sNum > fNum && sNum > foNum) {
            console.log("Второе число:", sNum);

            if (fNum > foNum) {
                console.log("Третье число:", fNum);
                console.log("Четвертое число:", foNum);
            }
            else {
                console.log("Третье число:",foNum);
                console.log("Четвертое число:",fNum);
            }
        }
        else if (foNum > fNum && foNum > sNum) {
            console.log("Второе число:", foNum);

            if (fNum > sNum) {
                console.log("Третье число:", fNum);
                console.log("Четвертое число:", sNum);
            }
            else {
                console.log("Третье число:",sNum);
                console.log("Четвертое число:",fNum);
            }
        }
    }

    if (foNum > fNum && foNum > sNum && foNum > tNum) {
        console.log("Первое число:",foNum);

        if (fNum > sNum && fNum > tNum) {
            console.log("Второе число:", fNum);

            if (sNum > tNum) {
                console.log("Третье число:", sNum);
                console.log("Четвертое число:", tNum);
            }
            else {
                console.log("Третье число:",tNum);
                console.log("Четвертое число:",sNum);
            }
        }
        else if (sNum > fNum && sNum > tNum) {
            console.log("Второе число:", sNum);

            if (fNum > tNum) {
                console.log("Третье число:", fNum);
                console.log("Четвертое число:", tNum);
            }
            else {
                console.log("Третье число:",tNum);
                console.log("Четвертое число:",fNum);
            }
        }
        else if (tNum > fNum && tNum > sNum) {
            console.log("Второе число:", tNum);

            if (fNum > sNum) {
                console.log("Третье число:", fNum);
                console.log("Четвертое число:", sNum);
            }
            else {
                console.log("Третье число:",sNum);
                console.log("Четвертое число:",fNum);
            }
        }
    }
}