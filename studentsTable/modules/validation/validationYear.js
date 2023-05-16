export function validationYear() {
  const inp = document.querySelector(".year");

  if (inp.value.trim() == "") {
    inp.classList.add('err')

    const err = document.createElement('p')
    err.textContent = `Ошибка! Заполните поле "Год начала обучения".`
    err.style.color = 'red'
    document.querySelector('.errorYear').append(err)
    inp.value = "";

    setTimeout(() => {
      inp.classList.remove('err')
      err.remove()
    }, 3000);

    return false;
  }

  if (inp.value < 2000) {
    inp.classList.add('err')

    const err = document.createElement('p')
    err.textContent = `Ошибка! Проверьте дату, введённую в поле "Год начала обучения".`
    err.style.color = 'red'
    document.querySelector('.errorYear').append(err)

    setTimeout(() => {
      inp.classList.remove('err')
      err.remove()
    }, 3000);

    return false;
  }

  return true;
}