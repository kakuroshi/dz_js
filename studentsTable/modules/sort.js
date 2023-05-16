import {clearList} from "./clearList.js";
import {createTable} from "./createTable.js";

export function sort(array, element) {
    if (document.querySelector("table").dataset.type == "unsorted") {
      array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1));
      
      clearList();
      createTable(array);

      document.querySelector("table").dataset.type = "sorted";
    } else if (document.querySelector("table").dataset.type == "sorted") {
      array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1)).reverse();

      clearList();
      createTable(array);

      document.querySelector("table").dataset.type = "unsorted";
    }
  }