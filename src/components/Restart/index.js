import React, { Component } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';

import StatusFace from './StatusFace';

class Restart extends Component {
  render() {
    const { isWon, isLost, restartGame } = this.props.store;

    const cls = cn('status-face', {
      'status-face--won': isWon,
      'status-face--lost': isLost
    });

    return <StatusFace className={cls} onClick={restartGame} />;
  }
}

export default observer(Restart);
