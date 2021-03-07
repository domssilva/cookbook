class Square {
  constructor(side) {
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  getStats() {
    console.log(`side: ${this.side}`);
  }
};

const square = {
  side: 4,
  obj: new Square(4),
}

console.log(`Square's area: ${square.obj.getArea()}`);
