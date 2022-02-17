import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, ((_err1, { size: size1 }) => {
    fs.stat(filepath2, ((_err2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    }));
  }));
};

compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));
