import React, { Component } from 'react';

import { pressNeighboringCells } from '../../services/grid';
import Cell from './Cell';
import './style.css';

class Grid extends Component {
  state = {
    grid: this.props.grid
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.grid) {
      this.setState({
        grid: nextProps.grid
      });
    }
  }

  handleCellClick = (newStatus, { rowIndex, colIndex }) => {
    console.log(rowIndex, colIndex, newStatus);
    const { grid } = this.state;

    const cell = grid[rowIndex][colIndex];

    this.props.onCellClick(cell.status, newStatus);

    cell.status = newStatus;

    pressNeighboringCells(cell, grid);

    this.setState({
      grid
    });
  };

  render() {
    const { grid } = this.state;
    return (
      <div className="grid">
        {grid.map((row, i) => (
          <div key={i} className="grid__row">
            {row.map((cell, j) => (
              <Cell
                key={`${i}-${j}`}
                className="grid__cell"
                {...grid[i][j]}
                onClick={this.handleCellClick}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
