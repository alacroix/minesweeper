import React, { Component } from 'react';

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

  render() {
    return <Grid onCellClick={this.handleCellClick} />;
  }
}

export default Board;
