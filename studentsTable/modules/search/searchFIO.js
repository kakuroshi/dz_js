import {clearList} from "../clearList.js"
import {createTable} from "../createTable.js";

export function searchFio(array, searchEl) {
    let helpArr = [];
    array.forEach(element => {
      element.surname.includes(searchEl) ? helpArr.push(element) :
      element.name.includes(searchEl) ? helpArr.push(element) :
      element.lastName.includes(searchEl) ? helpArr.push(element) : null;
    });
  
    clearList();
    createTable(helpArr);
  }