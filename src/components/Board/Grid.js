import React, { Component } from 'react';

import Cell from './Cell';
import './style.css';

const ROW_NUMBER = 8;
const COL_NUMBER = 8;
const MINES_NUMBER = 10;

const generateNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: this.initGrid()
    };
  }

  initGrid = () => {
    // init grid

    const grid = Array(ROW_NUMBER)
      .fill()
      .map(() =>
        Array(COL_NUMBER)
          .fill(null)
          .map(_ => ({ type: 'empty', minesAround: 0 }))
      );

    // generate mines
    [...Array(MINES_NUMBER)].forEach((_, i) => {
      const row = generateNumber(0, ROW_NUMBER - 1);
      const col = generateNumber(0, COL_NUMBER - 1);

      if (grid[row][col].type !== 'mine') {
        grid[row][col] = { ...grid[row][col], type: 'mine' };

        // increment mines around counter
        this.getNeighboringCells(row, col, grid).forEach(
          cell => cell.minesAround++
        );
      }
    });

    return grid;
  };

  getNeighboringCells = (rowIndex, colIndex, grid) => {
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

  render() {
    const { grid } = this.state;
    return (
      <div className="grid">
        {grid.map((row, i) => (
          <div key={i} className="grid__row">
            {row.map((cell, j) => (
              <Cell key={`${i}-${j}`} className="grid__cell" {...grid[i][j]} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
