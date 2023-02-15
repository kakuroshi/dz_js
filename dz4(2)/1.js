"use strict";

//Задание №1
console.log("Задание №1");
let styles = ["Джазз", "Блюзз"]

styles.push("Рок-н-ролл")
styles[Math.ceil((styles.length-1)/2)] = "Классика"
console.log(styles.shift());
styles.unshift("Рэп", "Регги")
console.log(styles);
console.log(`\n`);

//Задание №2
console.log("Задание №2");
let i = 0

while (i < 100) {
    ++i
    console.log(i);
}
console.log(`\n`);

//Задание №3
console.log("Задание №3");
let a = 101

while (a > 0) {
    --a
    console.log(a);
}
console.log(`\n`);

//Задание №4
console.log("Задание №4");
for (let a = 1; a < 101; a++) {
    if (a % 2 == 0) {
        console.log(a);
    } else {
        continue;
    }
}
console.log(`\n`);

//Задание №5
console.log("Задание №5");
let array = []

for (let a = 0; a < 10; a++) {
    array.push("x")
}
console.log(array);
console.log(`\n`);

//Задание №6
console.log("Задание №6");
let array1 = []

for (let a = 0; a < 10; a++) {
    array1.push(a+1)
}
console.log(array1);
console.log(`\n`);

//Задание №7
console.log("Задание №7");
let arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.random().toFixed(2));
}
console.log(arr);
console.log(`\n`);

//Задание №8
console.log("Задание №8");
let arr1 = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.round(Math.random() * 10)+1);
}
console.log(arr1)

//Задание №9
console.log("Задание №9");
let array2 = [-1, 3, 345, 23434, 5]

for (let a = 0; a < array2.length; a++) {
    if (array2[a] > 0 && array2[a] < 10) {
        console.log(array2[a]);
    } else {
        continue;
    }
}
console.log(`\n`);

//Задание №10
console.log("Задание №10");
let array3 = [-1, 3, 23454, 5, 5345345453]

for (let a = 0; a < array3.length; a++) {
    if (array3[a] == 5) {
        console.log("Есть");
        break;
    }
}
console.log(`\n`);

//Задание №11
console.log("Задание №11");
let array4 = [-8, 3, 23454, 5, 5345345453, 23223, 33232332, -3933, 4, 747447]
let sum = 0

for(let a = 0; a < array4.length; a++) {
    sum += array4[a]
}
console.log(sum);
console.log(`\n`);

//Задание №12
console.log("Задание №12");
let array5 = [-4, 9, 2, 3, 5]
let summa = 0

for(let a = 0; a < array5.length; a++) {
    summa += array5[a]**2
}
console.log(summa);
console.log(`\n`);

//Задание №13
console.log("Задание №13");
let array6 = [-44444, 325, 232454, 323, 5444445]
let summ = 0

for(let a = 0; a < array6.length; a++) {
    summ += array6[a]
}
summ = summ/array6.length
console.log(summ);