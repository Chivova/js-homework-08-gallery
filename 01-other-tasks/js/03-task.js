// Пример 3 - Поле
// Сделайте поле из белых клеточек 4x4
// При клике на клеточку она должна менять цвет
// с белого на черный,
// с черного на белый
// Под таблицей должна быть кнопка «поменять цвета».
// При ее нажатии все цвета клеточек меняются
// на противоположные.

const parentBlockRef = document.querySelector('.parent');
const reverseBtnRef = document.querySelector('.reverse');

parentBlockRef.addEventListener('click', onChangeColorClick);
reverseBtnRef.addEventListener('click', onBtnReverseClick);

function onChangeColorClick(evt) {
  if (!evt.target.classList.contains('block')) return;

  evt.target.classList.toggle('block_active');
}

// function onBtnReverseClick() {
//   const active = document.querySelectorAll('.block');
//   active.forEach((active) => active.classList.toggle('block_active'));
// }

function onBtnReverseClick() {
  parentBlockRef.classList.toggle('parent_reverse');
}
