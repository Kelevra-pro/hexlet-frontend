import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

export const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (readDirErr, filenames) => {
    if (readDirErr) {
      cb(readDirErr);
      return;
    }
    const filePaths = filenames.map((name) => path.join(dirPath, name));
    async.map(filePaths, fs.stat, (statErr, stats) => {
      if (statErr) {
        cb(statErr);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(null, sum);
    });
  });
};

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
