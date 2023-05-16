export function validationBirthday() {
    const inp = document.querySelector(".birthday");
  
    if (inp.value.trim() == "") {
      inp.classList.add('err')
  
      const err = document.createElement('p')
      err.textContent = `Ошибка! Заполните поле "Дата рождения".`
      err.style.color = 'red'
      document.querySelector('.errorBirthday').append(err)
      inp.value = "";
  
      setTimeout(() => {
        inp.classList.remove('err')
        err.remove()
      }, 3000);
  
      return false;
    }
    return true;
  }