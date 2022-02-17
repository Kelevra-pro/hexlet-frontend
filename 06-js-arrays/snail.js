import _ from 'lodash';

const rotate = (matrix) => _.reverse(_.zip(...matrix));

const buildSnailPath = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  const [head, ...tail] = matrix;
  return [head, buildSnailPath(rotate(tail))].flat();
};

// export default buildSnailPath;
