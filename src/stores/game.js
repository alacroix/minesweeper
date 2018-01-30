import { action, extendObservable } from 'mobx';

class Game {
  constructor() {
    extendObservable(this, {
      counter: 10
    });
  }

  incrementCounter = action(() => {
    this.counter += 1;
  });

  decrementCounter = action(() => {
    this.counter -= 1;
  });
}

export default Game;
