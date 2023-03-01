"use strict";

function isNumberInRange(number) {
    let bool;
    number > 0 && number < 10 ? bool = true : bool = false;
    return bool;
  }
  
  const array = [14, 88, -22, 8, 0, 1, 2334332234];
  let cleanArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (isNumberInRange(array[i])) {
      cleanArray.push(array[i]);
    }
  }
  
  console.log(cleanArray);