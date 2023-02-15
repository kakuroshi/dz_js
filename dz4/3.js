"use strict";

const students = ["Настя", "Александр", "Никита", "Даша", "Егор"]
const marks = [100, 33, 81, 73, 61]
let avMark = 0;

if (students.length == marks.length) {
    for (let i = 0; i < marks.length; i++) {
        avMark += marks[i]
    }
    console.log(`Средняя оценка студентов: ${avMark /= marks.length}`)

    for (let i = 0; i < marks.length; i++) { 
        if (marks[i] < 60) {
            console.log(`Студент "${students[i]}" получил оценку F`)
        } else if (marks[i] < 70 && marks[i] > 60) {
            console.log(`Студент "${students[i]}" получил оценку D`)
        } else if (marks[i] < 80 && marks[i] > 70) {
            console.log(`Студент "${students[i]}" получил оценку C`)
        } else if (marks[i] < 90 && marks[i] > 80) {
            console.log(`Студент "${students[i]}" получил оценку B`)
        } else if (marks[i] <= 100 && marks[i] > 90) {
            console.log(`Студент "${students[i]}" получил оценку A`)
        }
    }
} else {
    console.log("Не хватает данных в одном из массивов")
}