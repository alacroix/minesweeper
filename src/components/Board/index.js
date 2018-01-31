import React, { Component } from 'react';

import { initGrid } from '../../services/grid';
import Grid from './Grid';

class Board extends Component {
  componentWillMount() {
    this.grid = initGrid();
  }

  handleCellClick = (oldStatus, newStatus) => {
    const { incrementCounter, decrementCounter } = this.props.store;
    if (oldStatus === 'clear' && newStatus === 'flagged') {
      decrementCounter();
    } else if (oldStatus === 'flagged') {
      incrementCounter();
    }
  };

  render() {
    return <Grid grid={this.grid} onCellClick={this.handleCellClick} />;
  }
}

export default Board;
