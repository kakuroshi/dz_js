//Задание 1
// let mas1 = [1, 2, 3, 4, 5]

// mas1.splice(2, 0, 'a', 'b', 'c')
// console.log(mas1);

//Задание 2
// let obj1 = {js: 'test',
// jq: 'hello',
// css: 'world'}
// let keys = []

// for (key in obj1) {
//     keys.push(key)
// }

// console.log(keys);

//Задание 3
// const str1 = 'https://www.youtube.com/'
// const str2 = 'http://111111'

// console.log(str1.startsWith('http://'));
// console.log(str2.startsWith('http://'));

//Задание 4
// const str3 = 'asdnas.html'

// console.log(str3.endsWith('.html'));

//Задание 5
// let str4 = '123456'
// let mas2 = str4.split('')

// str4 = mas2.reverse().join('')

// console.log(str4);

//Задание 6
// let str = 'var_test_text';

// let mas = str.split('_').map((word, i) => i > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join('');

// console.log(mas)

//Задание 7
// let arr = ['я', 'учу', 'javascript', '!'];
// let res = arr.join(' ').toUpperCase() + '!';
// console.log(res);

//Задание 8
// let str = '2025-12-31';

// let mas = str.split('-').reverse().join('/')

// console.log(mas);

//Задание 9
// const fullName = 'Иван Иванович Иванов';
// const surname = 'Иванов';

// if (fullName.endsWith(surname)) {
//     const res = fullName.split(' ').reverse().join(' ')

//     console.log(res);
// } else {
//     console.log(fullName);
// }

//Задание 10
// let countries = ['Россия', 'США', 'Канада', 'Австралия', 'Великобритания']

// function getList (array) {
//     let select = document.createElement('select')
//     select.classList.add('sel')

//     document.body.append(select)

//     for (let i = 0; i < array.length; i++) {
        
//         let option = document.createElement('option')
//         select.append(option)
//         option.innerHTML = array[i]
//     }
// }

// function search(array, searchEl) {
//     let helpArr = [];
//     array.forEach(element => {
//         element.includes(searchEl) ? helpArr.push(element) : null;
//     });

//     document.querySelector('.sel') != null ? document.querySelector('.sel').remove() : null;

//     getList(helpArr)
// }


// document.querySelector('.input').addEventListener('input', () => {
//     search(countries, document.querySelector('.input').value)

//     document.querySelector('.input').value == '' ? document.querySelector('.sel').remove() : null;
// })

//Задание 11
// let students = [
//     {
//       name: "Александр",
//       surname: "Радюгин",
//       lastName: "Тимофеевич",
//       birthday: "2004-10-12",
//       yearOfStudy: 2020,
//       faculty: "КСК",
//     },
//     {
//       name: "Кирилл",
//       surname: "Касацкий",
//       lastName: "Юрьевич",
//       birthday: "2005-10-24",
//       yearOfStudy: 2021,
//       faculty: "ИСиП(п)2/3",
//     },
//     {
//       name: "Артём",
//       surname: "Исаев",
//       lastName: "Викторович",
//       birthday: "2005-09-11",
//       yearOfStudy: 2021,
//       faculty: "РП",
//     },
// ];
  

// function sort(array, element) {
//     if (document.querySelector("table").dataset.type == "unsorted") {
//       array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1));
      
//       clearList();
//       createTable(array);

//       document.querySelector("table").dataset.type = "sorted";
//     } else if (document.querySelector("table").dataset.type == "sorted") {
//       array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1)).reverse();

//       clearList();
//       createTable(array);

//       document.querySelector("table").dataset.type = "unsorted";
//     }
// }

// function createTable(arr) {
//     //Таблица и название полей
//     let divForTable = document.createElement("div");
//     divForTable.classList.add("tableDiv");
//     document.body.append(divForTable);
  
//     let crTxt = document.createElement("h1");
//     crTxt.classList.add("txtTable");
//     crTxt.textContent = "Таблица студентов:";
//     divForTable.append(crTxt);
  
//     let crTable = document.createElement("table");
//     crTable.classList.add("table");
//     crTable.dataset.type = "unsorted";
//     divForTable.append(crTable);
  
//     let crTrTable = document.createElement("tr");
//     crTable.append(crTrTable);
//     let crTdTable = document.createElement("td");
//     crTdTable.classList.add("fill");
//     let filter = document.createElement("button");
//     filter.classList.add("fioSort");
//     filter.textContent = "ФИО";
//     crTrTable.append(crTdTable);
//     crTdTable.append(filter);
  
//     crTdTable = document.createElement("td");
//     crTdTable.classList.add("fill");
//     crTrTable.append(crTdTable);
//     filter = document.createElement("button");
//     filter.classList.add("birthdSort");
//     filter.textContent = "Дата рождения";
//     crTdTable.append(filter);
  
//     crTdTable = document.createElement("td");
//     crTdTable.classList.add("fill");
//     crTrTable.append(crTdTable);
//     filter = document.createElement("button");
//     filter.classList.add("yearSort");
//     filter.textContent = "Год начала обучения";
//     crTdTable.append(filter);
  
//     crTdTable = document.createElement("td");
//     crTdTable.classList.add("fill");
//     crTrTable.append(crTdTable);
//     filter = document.createElement("button");
//     filter.classList.add("facultySort");
//     filter.textContent = "Факультет";
//     crTdTable.append(filter);
  
//     addStudents(arr);
  
//     document.querySelector(".fioSort").addEventListener("click", () => {
//       sort(arr, "surname");
//     });
  
//     document.querySelector(".birthdSort").addEventListener("click", () => {
//       sort(arr, "birthday");
//     });
  
//     document.querySelector(".yearSort").addEventListener("click", () => {
//       sort(arr, "yearOfStudy");
//     });
  
//     document.querySelector(".facultySort").addEventListener("click", () => {
//       sort(arr, "faculty");
//     });
  
// }

// function clearList() {
//     let table = document.querySelector(".tableDiv");
//     table.remove();
// }

// function addStudents(arr) {
//     //Добавление студентов
//     let crTable = document.querySelector(".table");
//     for (let i = 0; i < arr.length; i++) {
//       let crTr = document.createElement("tr");
//       crTable.append(crTr);
//       let crTd = document.createElement("td");
//       crTr.append(crTd);
//       crTd.classList.add("fill");
//       crTd.textContent = `${arr[i].surname} ${arr[i].name} ${arr[i].lastName}`;
  
//       crTd = document.createElement("td");
//       crTd.classList.add("fill");
//       crTr.append(crTd);
//       crTd.textContent = `${arr[i].birthday} (${Math.trunc(
//         (new Date() - new Date(arr[i].birthday)) /
//           (60 * 60 * 24 * 1000) /
//           365
//       )} лет)`;
  
//       crTd = document.createElement("td");
//       crTd.classList.add("fill");
//       crTr.append(crTd);
      
//       let course
//       Math.trunc(new Date().getFullYear() - arr[i].yearOfStudy) > 4
//         ? (course = "Завершил")
//         : (course = `${Math.trunc(
//             new Date().getFullYear() - arr[i].yearOfStudy
//           )} курс`);
//       crTd.textContent = `${arr[i].yearOfStudy} (${course})`;
  
//       crTd = document.createElement("td");
//       crTd.classList.add("fill");
//       crTr.append(crTd);
//       crTd.textContent = `${arr[i].faculty}`;
//     }
// }

// window.addEventListener('DOMContentLoaded', () => {
//     createTable(students)
// })