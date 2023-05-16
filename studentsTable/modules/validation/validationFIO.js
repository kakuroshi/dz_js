export function validationFio() {
    const inp = document.querySelector(".FIO");
  
    if (inp.value.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
      inp.classList.add('err')
  
      const err = document.createElement('p')
      err.textContent = `Ошибка! Поле 'ФИО' не должно содержать цифры`
      err.style.color = 'red'
      document.querySelector('.errorFIO').append(err)
  
      setTimeout(() => {
        inp.classList.remove('err')
        err.remove()
      }, 3000);
  
      return false;
    } else if (inp.value.trim() == "") {
      inp.classList.add('err')
  
      const err = document.createElement('p')
      err.textContent = `Ошибка! Заполните поле 'ФИО' корректно!`
      err.style.color = 'red'
      document.querySelector('.errorFIO').append(err)
      inp.value = "";
  
      setTimeout(() => {
        inp.classList.remove('err')
        err.remove()
      }, 3000);
  
      return false;
    } else if (inp.value.split(" ").length < 3) {
      inp.classList.add('err')
  
      const err = document.createElement('p')
      err.textContent = `Ошибка! Заполните поле 'ФИО' корректно!`
      err.style.color = 'red'
      document.querySelector('.errorFIO').append(err)
  
      setTimeout(() => {
        inp.classList.remove('err')
        err.remove()
      }, 3000);
  
      return false;
    }
  
    return true;
  }