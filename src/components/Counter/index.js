import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Digits from '../Digits';

class Counter extends Component {
  render() {
    const { counter } = this.props.store;
    return <Digits count={3} value={counter} />;
  }
}

export default observer(Counter);
