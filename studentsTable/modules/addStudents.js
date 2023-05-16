export function addStudents(arr) {
    //Добавление студентов
    let crTable = document.querySelector(".table");
    for (let i = 0; i < arr.length; i++) {
      let crTr = document.createElement("tr");
      crTable.append(crTr);
      let crTd = document.createElement("td");
      crTr.append(crTd);
      crTd.classList.add("fill");
      crTd.textContent = `${arr[i].surname} ${arr[i].name} ${arr[i].lastName}`;
  
      crTd = document.createElement("td");
      crTd.classList.add("fill");
      crTr.append(crTd);
      crTd.textContent = `${arr[i].birthday} (${Math.trunc(
        (new Date() - new Date(arr[i].birthday)) /
          (60 * 60 * 24 * 1000) /
          365
      )} лет)`;
  
      crTd = document.createElement("td");
      crTd.classList.add("fill");
      crTr.append(crTd);
      
      let course
      Math.trunc(new Date().getFullYear() - arr[i].yearOfStudy) > 4
        ? (course = "Завершил")
        : (course = `${Math.trunc(
            new Date().getFullYear() - arr[i].yearOfStudy
          )} курс`);
      crTd.textContent = `${arr[i].yearOfStudy} (${course})`;
  
      crTd = document.createElement("td");
      crTd.classList.add("fill");
      crTr.append(crTd);
      crTd.textContent = `${arr[i].faculty}`;
    }
  }