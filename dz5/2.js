"use strict";

function statusPeople(Age) {
    let agePeople;
  
    Age >= 1 && Age <= 17 ? agePeople = "ребёнок" : agePeople = agePeople;
    Age >= 18 && Age <= 30 ? agePeople = "молодой" : agePeople = agePeople;
    Age >= 30 && Age <= 55 ? agePeople = "зрелый" : agePeople = agePeople;
    Age >= 55 ? agePeople = "старый" : agePeople = agePeople;
  
    return `Возраст: ${Age} - ${agePeople}`;
  }
  
  for (let i = 1; i <= 100; i++) {
    console.log(statusPeople(i));
  }