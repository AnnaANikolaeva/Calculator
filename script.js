//нажимаем на кнопки в браузере
function inputExp(symbol) {
  let element = document.getElementById("expression");
  element.value += symbol
}

//очищаем поле ввода и результата
function clearAll() {
  let element = document.getElementById("expression");
  element.value = "";
  let result = document.getElementById("result");
  result.value = "";
}

//рассчитываем результат
function result() {
  let element = document.getElementById("expression");
  resultOfExp = eval(element.value); // resultOfExp и eval-это команды встроенные
  let result = document.getElementById("result");
  result.value = resultOfExp;
}

//работа с клавиатурой
document.onkeydown = function (keyboard) {
  switch (keyboard.key) {
    case 'Escape':
      // keyboard.preventDefault()
      clearAll()
      break;
    case 'Enter':
      keyboard.preventDefault()
      result()
      break;
    default:
      break
  }
}