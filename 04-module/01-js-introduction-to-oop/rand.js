class Random {
  constructor(seed) {
    this.init = seed;
    this.seed = seed;
  }

  getNext() {
    const a = 106 + this.init;
    const c = 1283 + this.init;
    const m = 6075 + this.init;

    this.seed = (a * this.seed + c) % m;

    return this.seed;
  }

  reset() {
    this.seed = this.init;
  }
}

export default Random;
