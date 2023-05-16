import {clearList} from "../clearList.js"
import {createTable} from "../createTable.js";

export function searchBirthd(array, searchEl) {
    let helpArr = []
  
    array.forEach( element => {
      element.birthday.includes(searchEl) ? helpArr.push(element) : null
    })
  
    clearList();
    createTable(helpArr);
} 
  