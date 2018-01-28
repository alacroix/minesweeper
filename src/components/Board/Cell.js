import React, { PureComponent } from 'react';
import cn from 'classnames';

class Cell extends PureComponent {
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
    const { className, type, minesAround, status } = this.props;
    const cls = cn(className, {
      [`${className}--pressed`]: status === 'pressed',
      [`${className}--flagged`]: status === 'flagged'
    });
    return (
      <div
        className={cls}
        onClick={this.handleOnClick}
        onContextMenu={this.handleRightClick}
      >
        {type === 'mine' ? 'M' : minesAround}
      </div>
    );
  }
}

export default Cell;
