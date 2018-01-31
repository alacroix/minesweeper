import { action, extendObservable } from 'mobx';

import { initGrid } from '../services/grid';

class Game {
  static getInitialState = () => ({
    counter: 10,
    grid: initGrid()
  });

  constructor() {
    extendObservable(this, Game.getInitialState());
  }

  restartGame = action(() => {
    this.grid = initGrid();
    this.counter = 10;
  });

  incrementCounter = action(() => {
    this.counter += 1;
  });

  decrementCounter = action(() => {
    this.counter -= 1;
  });
}

export default Game;
