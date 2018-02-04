import { action, computed, extendObservable } from 'mobx';

import { initGrid, GAME_STATUS } from '../services/grid';

class Game {
  constructor() {
    extendObservable(this, {
      counter: 10,
      grid: initGrid(),
      status: GAME_STATUS.RUNNING,
      isGameOver: computed(() => this.status !== GAME_STATUS.RUNNING),
      isWon: computed(() => this.status === GAME_STATUS.WON),
      isLost: computed(() => this.status === GAME_STATUS.LOST)
    });
  }

  restartGame = action(() => {
    this.grid = initGrid();
    this.counter = 10;
    this.status = GAME_STATUS.RUNNING;
  });

  changeStatus = newStatus => {
    this.status = newStatus;
  };

  incrementCounter = action(() => {
    this.counter += 1;
  });

  decrementCounter = action(() => {
    this.counter -= 1;
  });
}

export default Game;
