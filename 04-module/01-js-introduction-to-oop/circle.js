class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

export default Circle;

const circle = new Circle(3);
circle.getArea(); // 28.274...
