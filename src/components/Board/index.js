import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { GAME_STATUS, checkGridStatus } from '../../services/grid';
import Grid from './Grid';

class Board extends Component {
  handleCellClick = (oldStatus, newStatus) => {
    const { incrementCounter, decrementCounter } = this.props.store;
    if (oldStatus === 'clear' && newStatus === 'flagged') {
      decrementCounter();
    } else if (oldStatus === 'flagged') {
      incrementCounter();
    }
  };

  handleGameStatus = grid => {
    const { changeStatus } = this.props.store;
    changeStatus(checkGridStatus(grid));
  };

  render() {
    const { grid, isGameOver } = this.props.store;
    return (
      <Grid
        grid={grid}
        isOver={isGameOver}
        checkGameStatus={this.handleGameStatus}
        onCellClick={this.handleCellClick}
      />
    );
  }
}

export default observer(Board);
