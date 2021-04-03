// Пример 2 - Вывести 4 красных квадрата,
// при клике на любой, он становиться зеленым,
// при этом если есть уже зеленый квадрат,
// то он становиться обратно красным и так можно кликать на любой квадрат,
// он становиться зеленым, а старый зеленый квадрат обратно крассным и тд.

const parentBlockRef = document.querySelector('.parent');
const blockRefs = document.querySelectorAll('.child_block');

parentBlockRef.addEventListener('click', onBlockClick);

function onBlockClick(evt) {
  if (!evt.target.classList.contains('child_block')) return;

  //   clearBlocks();

  clearCurrentBlockColor();

  evt.target.classList.add('child_block__active');
}

function clearBlocks() {
  blockRefs.forEach((blockRef) => {
    blockRef.classList.remove('child_block__active');
  });
}

function clearCurrentBlockColor() {
  const currentActiveBlock = document.querySelector('.child_block__active');

  if (currentActiveBlock) {
    currentActiveBlock.classList.remove('child_block__active');
  }
}
