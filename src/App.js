import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './components/Board';
import Counter from './components/Counter';
import Game from './stores/game';

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
        </header>
        <Board store={this.game} />
      </div>
    );
  }
}

export default App;
