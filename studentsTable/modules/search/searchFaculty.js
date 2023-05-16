import {clearList} from "../clearList.js"
import {createTable} from "../createTable.js";

export function searchFaculty(array, searchEl) {
    let helpArr = [];;
    array.forEach(element => {
      element.faculty.includes(searchEl) ? helpArr.push(element) : null
    });
    
    clearList();
    createTable(helpArr);
}