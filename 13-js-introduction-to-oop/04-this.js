const make = (numer, denom) => ({
  numer,
  denom,
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
    const newDenom = this.getDenom() * rational.getDenom();

    return make(newNumer, newDenom);
  },
});

// export default make;

const rat1 = make(3, 9);

rat1.getNumer(); // 3
rat1.getDenom(); // 9

const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
rat3.toString(); // '99/27'
