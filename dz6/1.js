"use strict";

//Задание 1
// let user = {}
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name

//Задние 2
// let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
// console.log("Зарплата Коли:",obj.Коля);

//Задание 2.1
// let array = []
// let user = [{ name: "Сергей", age: 52 },
// {name: "Данила",age: 21,},
// {name: "Элина", age: 44,},];

// function getAge (arrayEmployes) {
//     for (let i = 0; i < arrayEmployes.length; i++) {
//         array.push(`${user[i].name} ${user[i].age} года/лет`);
//     }
//     return array
// }
// getAge(user)

//Задание 3
// let Bob = "";

// let user = [
// 	{ name: "John", age: 30 },
// 	{ name: "Bob", age: 21 },
// 	{ name: "Anna", age: 19 },
// ];

// function getName(user) {
// 	for (let i = 0; i < user.length; i++) {
// 		if (user[i].name == "Bob") {
// 			Bob = user[i];
// 		}
// 		if (user[i].name == "Anna") {
// 			user.splice(i, 1);
// 			i--;
// 		}
// 	}
// }
// getName(user);

//Задание 4
// let name = "Вилсон"
// let surname = "Шуклин"

// function getNameSurname (name, surname) {
//     console.log(this.name, this.surname);
// }

// function getMyName (name) {
//     console.log("My name is", this.name);
// }

// let obj = {
//     name,
//     surname,
//     getNameSurname,
//     getMyName
// }

// delete obj.getNameSurname

//Задание 5
// function calc (fNum, sNum, operation) {
//     let calculator = {
//         sum () {
//             return fNum + sNum
//         },
//         mul () {
//             return fNum * sNum
//         }
//     }
//     return calculator[operation]()
// }

//Задание 6
// let sum = 0;

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };

// for (let elem in salaries) {
//     sum += salaries[elem]
// }

//Задание 7
// let user = {
//     name: "John",
//     age: 30
// };

// if (Object.keys(user) == 0) console.log("Объект пуст");
// else console.log("Объект содержит данные");

// if ('age' in user) console.log("Свойство 'Age' присутствует в данном объекте");
// else console.log("Свойство 'Age' отсутствует в данном объекте");

//Задание 9
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric (menu) {
    for (let elem in menu) {
        if (typeof menu[elem] == "number") {
            menu[elem] = menu[elem] * 2
        }
    }
}
multiplyNumeric(menu)
console.log(menu);