const ROW_NUMBER = 8;
const COL_NUMBER = 8;
const MINES_NUMBER = 10;

const generateNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const GAME_STATUS = Object.freeze({
  RUNNING: 0,
  WON: 1,
  LOST: 2
});

export const initGrid = () => {
  // init grid
  const grid = Array(ROW_NUMBER)
    .fill()
    .map((_, rowIndex) =>
      Array(COL_NUMBER)
        .fill(null)
        .map((_, colIndex) => ({
          status: 'clear',
          type: 'empty',
          minesAround: 0,
          rowIndex,
          colIndex
        }))
    );

  // generate mines
  [...Array(MINES_NUMBER)].forEach((_, i) => {
    const row = generateNumber(0, ROW_NUMBER - 1);
    const col = generateNumber(0, COL_NUMBER - 1);

    if (grid[row][col].type !== 'mine') {
      grid[row][col] = { ...grid[row][col], type: 'mine' };

      // increment mines around counter
      getNeighboringCells(row, col, grid).forEach(cell => cell.minesAround++);
    }
  });

  if (process.env.NODE_ENV === 'development') {
    console.log(
      grid.map(row => row.map(cell => (cell.type === 'mine' ? 1 : 0)))
    );
  }

  return grid;
};

const getNeighboringCells = (rowIndex, colIndex, grid) => {
  const isAtTopEdge = rowIndex === 0;
  const isAtBottomEdge = rowIndex === ROW_NUMBER - 1;
  const isAtLeftEdge = colIndex === 0;
  const isAtRightEdge = colIndex === COL_NUMBER - 1;

  const cells = [];
  if (!isAtTopEdge) {
    cells.push(grid[rowIndex - 1][colIndex]);
    if (!isAtLeftEdge) cells.push(grid[rowIndex - 1][colIndex - 1]);
    if (!isAtRightEdge) cells.push(grid[rowIndex - 1][colIndex + 1]);
  }
  if (!isAtLeftEdge) cells.push(grid[rowIndex][colIndex - 1]);
  if (!isAtRightEdge) cells.push(grid[rowIndex][colIndex + 1]);
  if (!isAtBottomEdge) {
    cells.push(grid[rowIndex + 1][colIndex]);
    if (!isAtLeftEdge) cells.push(grid[rowIndex + 1][colIndex - 1]);
    if (!isAtRightEdge) cells.push(grid[rowIndex + 1][colIndex + 1]);
  }

  return cells;
};

export const pressNeighboringCells = (cell, grid) => {
  if (
    cell.type !== 'mine' &&
    cell.status === 'pressed' &&
    cell.minesAround === 0
  ) {
    getNeighboringCells(cell.rowIndex, cell.colIndex, grid).forEach(
      neighbor => {
        if (neighbor.type !== 'mine' && neighbor.status === 'clear') {
          neighbor.status = 'pressed';
          if (neighbor.minesAround === 0) {
            pressNeighboringCells(neighbor, grid);
          }
        }
      }
    );
  }
};

export const checkGridStatus = grid => {
  let isOver = true;

  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];
    for (let j = 0; j < row.length; j += 1) {
      const cell = row[j];

      if (cell.type === 'mine') {
        if (cell.status === 'pressed') {
          console.log('LOST');
          return GAME_STATUS.LOST;
        }
      } else {
        if (cell.status !== 'pressed') {
          isOver = false;
        }
      }
    }
  }

  console.log(isOver ? 'WON' : 'RUNNING');
  return isOver ? GAME_STATUS.WON : GAME_STATUS.RUNNING;
};
