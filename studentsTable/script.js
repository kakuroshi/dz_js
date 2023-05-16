import {clearList} from "./modules/clearList.js";
import {createTable} from "./modules/createTable.js";
import {searchFio} from "./modules/search/searchFIO.js";
import {searchBirthd} from "./modules/search/searchBirthd.js";
import {searchYear} from "./modules/search/searchYear.js";
import {searchFaculty} from "./modules/search/searchFaculty.js";
import {validationFio} from "./modules/validation/validationFIO.js";
import {validationBirthday} from "./modules/validation/validationBirthday.js";
import {validationYear} from "./modules/validation/validationYear.js";
import {validationFaculty} from "./modules/validation/validationFaculty.js";

let students = [
  {
    name: "Александр",
    surname: "Радюгин",
    lastName: "Тимофеевич",
    birthday: "2004-10-12",
    yearOfStudy: 2020,
    faculty: "КСК",
  },
  {
    name: "Кирилл",
    surname: "Касацкий",
    lastName: "Юрьевич",
    birthday: "2005-10-24",
    yearOfStudy: 2021,
    faculty: "ИСиП(п)2/3",
  },
  {
    name: "Артём",
    surname: "Исаев",
    lastName: "Викторович",
    birthday: "2005-09-11",
    yearOfStudy: 2021,
    faculty: "РП",
  },
];

if (localStorage.getItem("students")) {
  let ls = localStorage.getItem("students");
  students = JSON.parse(ls);
}

document.querySelector(".studentAddBtn").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("open");
});

document.querySelector(".cancel").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("open");
});

document.querySelector('.fioSearch').addEventListener('input', () => {
  searchFio(students, document.querySelector('.fioSearch').value)
})

document.querySelector('.facultySearch').addEventListener('input', () => {
  searchFaculty(students, document.querySelector('.facultySearch').value)
})

document.querySelector('.birthdaySearch').addEventListener('input', () => {
  searchBirthd(students, document.querySelector('.birthdaySearch').value)
})

document.querySelector('.yearSearch').addEventListener('input', () => {
  searchYear(students, document.querySelector('.yearSearch').value)
})

document.querySelector(".ready").addEventListener("click", () => {
  let resFio = validationFio();
  let resBirthd = validationBirthday();
  let resYear = validationYear();
  let resFaculty = validationFaculty();

  if (resFio && resBirthd && resYear && resFaculty) {
    let student = {};

    let fio = document.querySelector(".FIO").value.split(" ");

    student.name = fio[1];
    student.surname = fio[0];
    student.lastName = fio[2];
    student.birthday = document.querySelector(".birthday").value;
    student.yearOfStudy = document.querySelector(".year").value;
    student.faculty = document.querySelector(".faculty").value;

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    clearList();
    createTable(students);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  createTable(students)
})