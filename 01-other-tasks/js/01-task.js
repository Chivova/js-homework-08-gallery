// 1 - Дан блок, внутри кнопка.
// При наведении на кнопку, красить блок в красный цвет

const cardRef = document.querySelector('.card');

cardRef.addEventListener('mouseover', onMouseOverListener);
cardRef.addEventListener('mouseout', onMouseOutListener);

function onMouseOverListener(evt) {
  console.log(evt.target);
  console.log(evt.currentTarget);
  if (evt.target.classList.contains('card__delete')) {
    evt.currentTarget.classList.add('card_focus');
  }
}

function onMouseOutListener(evt) {
  if (!evt.target.classList.contains('card__delete')) {
    evt.currentTarget.classList.remove('card_focus');
  }
}
