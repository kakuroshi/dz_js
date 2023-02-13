"use strict";

//Введите номер месяца(1-12):
const Month = 2
const god = 2024

if (god % 4 === 0) {
    if (Month > 12 || Month < 1) {
        console.log("Введены неверные данные");
    } else {
        if (!isNaN(Month) && isFinite(Month)) {
            if (Month === 1 || Month === 3 || Month === 5 || Month === 7 || Month === 8 || Month === 10 || Month === 12) {
                console.log("Количество дней в выбранном месяце: 31");
                }
                
            else if (Month === 4 || Month === 4 || Month === 6 || Month === 9 || Month == 11) {
                console.log("Количество дней в выбранном месяце: 30");
            }
                    
            else if (Month === 2) {
                console.log("Количество дней в выбранном месяце: 29");
            }
        }
    }
} else {
    if (Month > 12 || Month < 1) {
        console.log("Введены неверные данные");
    } else {
        if (!isNaN(Month) && isFinite(Month)) {
            if (Month === 1 || Month === 3 || Month === 5 || Month === 7 || Month === 8 || Month === 10 || Month === 12) {
                console.log("Количество дней в выбранном месяце: 31");
                }
        
            else if (Month === 4 || Month === 4 || Month === 6 || Month === 9 || Month == 11) {
                console.log("Количество дней в выбранном месяце: 30");
            }
            
            else if (Month === 2) {
                console.log("Количество дней в выбранном месяце: 28");
            }
        }
    }
}