'use strict'

const field = document.querySelector('.field');
const cellSize = 100;


const empty = {
  top: 0,
  left: 0
};

const cells = [];
cells.push(empty);

// minyayu mistami
function move(index) {
  const cell = cells[index];
  const leftDift = Math.abs(empty.left - cell.left);
  const topDift = Math.abs(empty.top - cell.top);
  
  if ((leftDift + topDift) > 1) {
    return;
  }
  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;

  const emptyLeft = empty.left;
  const emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;

  // proverka and result
  const isFinised = cells.every(cell => {
    console.log(cell.value, cell.top);
    return cell.value === cell.top * 4 + cell.left;
  });

  if (isFinised) {
    alert('You won!');
  }
}

//permeshat cufru
const numbers = [...Array(15).keys()]
  .sort(() => Math.random() - 0.5);

//rasstavlyayu cufru
for (let i = 1; i <= 15; i++) {
  const cell = document.createElement("div");
  cell.className = 'cell';
  cell.innerHTML = numbers[i - 1] + 1;

  const left = i % 4;
  const top = (i - left) / 4;

  cells.push({
    left: left,
    top: top,
    element: cell
  });

  cell.style.left = `${left * cellSize}px`;
  cell.style.top = `${top * cellSize}px`;

  field.append(cell);


  cell.addEventListener('click', () => {
    move(i);
  });

}
