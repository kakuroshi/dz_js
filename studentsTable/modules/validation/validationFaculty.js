export function validationFaculty() {
    const inp = document.querySelector(".faculty");
  
    if (inp.value.trim() == "") {
      inp.classList.add('err')
  
      const err = document.createElement('p')
      err.textContent = `Ошибка! Заполните поле "Факультет".`
      err.style.color = 'red'
      document.querySelector('.errorFaculty').append(err)
      inp.value = "";
  
      setTimeout(() => {
        inp.classList.remove('err')
        err.remove()
      }, 3000);
  
      return false;
    }
    return true;
  }
  