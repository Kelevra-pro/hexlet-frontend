const makeDecartPoint = (x, y) => {
  return { x, y };
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );

  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

export { makeRectangle, containsOrigin };

const rectangle1 = makeRectangle(makeDecartPoint(0, 1), 4, 5);
containsOrigin(rectangle1); // false

const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
containsOrigin(rectangle2); // true
