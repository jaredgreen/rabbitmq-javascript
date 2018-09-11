const DELAY = ms => { return new Promise(resolve => { setTimeout(resolve, ms) }) };

class TimeoutCoordinator {
  constructor() {
    this.currentTimeout = 0;
  }

  async waitForTimeout(pollingRateMillis, maxTimeoutMillis) {
    while (this.currentTimeout < maxTimeoutMillis) {
      await DELAY(pollingRateMillis);
      this.currentTimeout += pollingRateMillis;
    }
  }

  resetCurrentTimeout() {
    this.currentTimeout = 0;
  }


}

module.exports = TimeoutCoordinator;