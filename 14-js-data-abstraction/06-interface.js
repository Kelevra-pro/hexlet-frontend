const x = 4;
const y = 8;

const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  };

  return point;
};

// point хранит в себе данные в полярной системе координат
const point = makePoint(x, y);

const getAngle = (point) => point.angle;

const getRadius = (point) => point.radius;

const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));

const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));

// Здесь происходит преобразование из полярной в декартову
getX(point); // 4
getY(point); // 8
