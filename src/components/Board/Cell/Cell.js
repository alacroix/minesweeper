import styled from 'styled-components';

import Sprite from './cell.png';

const CELL_SIZE = 16;

const getBackgroundPosition = ({ cellType, minesAround, status }) => {
  let x = 0;
  let y = 0;
  if (status === 'clear') {
    y = CELL_SIZE;
  } else if (status === 'flagged') {
    x = y = CELL_SIZE;
  } else {
    if (cellType !== 'mine') {
      x = CELL_SIZE * minesAround;
    } else {
      x = CELL_SIZE * 2;
      y = CELL_SIZE;
    }
  }
  return `-${x}px -${y}px`;
};

const Cell = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  background: url(${Sprite}) no-repeat;

  &.grid__cell {
    background-position: ${getBackgroundPosition};
  }
`;

export default Cell;
