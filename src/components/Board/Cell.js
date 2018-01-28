import React, { Component } from 'react';
import cn from 'classnames';

class Cell extends Component {
  state = {
    flagged: false,
    pressed: false
  };

  handleOnClick = () => {
    this.setState({
      pressed: true
    });
  };

  handleRightClick = e => {
    e.preventDefault();
    this.setState({
      flagged: !this.state.flagged
    });
  };

  render() {
    const { flagged, pressed } = this.state;
    const { className, type, minesAround } = this.props;
    const cls = cn(className, {
      [`${className}--pressed`]: pressed,
      [`${className}--flagged`]: flagged
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
