import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Counter extends Component {
  render() {
    const { counter } = this.props.store;
    return <div>{counter}</div>;
  }
}

export default observer(Counter);
