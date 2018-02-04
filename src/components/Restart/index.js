import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Restart extends Component {
  render() {
    const { isWon, isLost, restartGame } = this.props.store;

    let text = '';
    if (isWon) {
      text = 'You won! 🎉 ';
    } else if (isLost) {
      text = 'You lost! 💀 ';
    }
    text += 'Restart?';

    return <div onClick={restartGame}>{text}</div>;
  }
}

export default observer(Restart);
