import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './components/Board';
import Counter from './components/Counter';
import Digits from './components/Digits';
import Game from './stores/game';
import Restart from './components/Restart';

class App extends Component {
  constructor(props) {
    super(props);
    this.game = new Game();
  }

  render() {
    return (
      <div className="App">
        <header>
          <Counter store={this.game} />
          <Restart store={this.game} />
          <Digits count={3} value={0} />
        </header>
        <Board store={this.game} />
      </div>
    );
  }
}

export default App;
