import { addStudents } from "./addStudents.js";
import { sort } from "./sort.js";

export function createTable(arr) {
    //Таблица и название полей
    let divForTable = document.createElement("div");
    divForTable.classList.add("tableDiv");
    document.body.append(divForTable);
  
    let crTxt = document.createElement("h1");
    crTxt.classList.add("txtTable");
    crTxt.textContent = "Таблица студентов:";
    divForTable.append(crTxt);
  
    let crTable = document.createElement("table");
    crTable.classList.add("table");
    crTable.dataset.type = "unsorted";
    divForTable.append(crTable);
  
    let crTrTable = document.createElement("tr");
    crTable.append(crTrTable);
    let crTdTable = document.createElement("td");
    crTdTable.classList.add("fill");
    let filter = document.createElement("button");
    filter.classList.add("fioSort");
    filter.textContent = "ФИО";
    crTrTable.append(crTdTable);
    crTdTable.append(filter);
  
    crTdTable = document.createElement("td");
    crTdTable.classList.add("fill");
    crTrTable.append(crTdTable);
    filter = document.createElement("button");
    filter.classList.add("birthdSort");
    filter.textContent = "Дата рождения";
    crTdTable.append(filter);
  
    crTdTable = document.createElement("td");
    crTdTable.classList.add("fill");
    crTrTable.append(crTdTable);
    filter = document.createElement("button");
    filter.classList.add("yearSort");
    filter.textContent = "Год начала обучения";
    crTdTable.append(filter);
  
    crTdTable = document.createElement("td");
    crTdTable.classList.add("fill");
    crTrTable.append(crTdTable);
    filter = document.createElement("button");
    filter.classList.add("facultySort");
    filter.textContent = "Факультет";
    crTdTable.append(filter);
  
    addStudents(arr);
  
    document.querySelector(".fioSort").addEventListener("click", () => {
      sort(arr, "surname");
    });
  
    document.querySelector(".birthdSort").addEventListener("click", () => {
      sort(arr, "birthday");
    });
  
    document.querySelector(".yearSort").addEventListener("click", () => {
      sort(arr, "yearOfStudy");
    });
  
    document.querySelector(".facultySort").addEventListener("click", () => {
      sort(arr, "faculty");
    });
  
  }