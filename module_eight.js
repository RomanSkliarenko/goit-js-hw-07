// // Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxes = document.querySelector("#boxes");
const input = document.querySelector("[step='1']");
const renderBtn = document.querySelector("[data-action='render']");
const destroyBtn = document.querySelector("[data-action='destroy']");

function random() {
  return Math.floor(Math.random() * 256);
}
function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  // boxes.textContent = "";
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}
renderBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);
