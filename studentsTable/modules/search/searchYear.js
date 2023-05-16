import {clearList} from "../clearList.js"
import {createTable} from "../createTable.js";

export function searchYear(array, searchEl) {
    let helpArr = []
  
    array.forEach( element => {
      String(element.yearOfStudy).includes(searchEl) ? helpArr.push(element) : null
    })
    
    clearList();
    createTable(helpArr);
}