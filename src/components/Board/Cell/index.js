import React, { PureComponent } from 'react';

import Cell from './Cell';

class WrappedCell extends PureComponent {
  handleStatusChange = newStatus => {
    const { rowIndex, colIndex, status } = this.props;
    if (status !== 'pressed') {
      this.props.onClick(newStatus, { rowIndex, colIndex });
    }
  };

  handleOnClick = () => {
    this.handleStatusChange('pressed');
  };

  handleRightClick = e => {
    e.preventDefault();
    const { status } = this.props;
    this.handleStatusChange(status === 'flagged' ? 'clear' : 'flagged');
  };

  render() {
    const { type, minesAround, status } = this.props;
    return (
      <Cell
        className="grid__cell"
        onClick={this.handleOnClick}
        onContextMenu={this.handleRightClick}
        minesAround={minesAround}
        status={status}
        cellType={type}
      />
    );
  }
}

export default WrappedCell;
