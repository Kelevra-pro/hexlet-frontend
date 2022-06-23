function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

function reverse(segment) {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();
  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());

  return new Segment(newBeginPoint, newEndPoint);
}

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
console.log('1',
  segment.beginPoint.x,
  segment.beginPoint.y,
  segment.endPoint.x,
  segment.endPoint.y,
);// => 1 10 11 -3

console.log('2',
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y,
); // => 11 -3 1 10
