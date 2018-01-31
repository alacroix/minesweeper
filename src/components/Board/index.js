import React, { Component } from 'react';
import { observer } from 'mobx-react';

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
    const { grid } = this.props.store;
    return <Grid grid={grid} onCellClick={this.handleCellClick} />;
  }
}

export default observer(Board);
