"use strict";

const text = "Есть несколько товаров по $120 и $20 и $70 все они крутые";
let otvet = [];
for (let i = 0; i < text.length; i++) {
    if (text[i] == "$") {
        otvet.push(text.slice(i+1, text.indexOf(" ", i)))
    } else {
        continue;
    }
}
console.log(otvet)