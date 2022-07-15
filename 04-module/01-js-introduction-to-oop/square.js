class Square {
  constructor(side) {
    this.side = side;
  }

  getSide() {
    console.log('getSide', this.side);

    return this.side;
  }
}

class SquaresGenerator {
  static generate(side, repeats = 5) {
    const squares = [];
    for (let i = 0; i < repeats; i += 1) {
      squares[i] = new Square(side);
    }

    return squares;
  }
}

const square = new Square(10);
square.getSide(); // 10

const squares = SquaresGenerator.generate(3, 2);
// [new Square(3), new Square(3)]