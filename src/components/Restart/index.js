import React, { Component } from 'react';

class Restart extends Component {
  render() {
    const { restartGame } = this.props.store;
    return <div onClick={restartGame}>Restart</div>;
  }
}

export default Restart;
