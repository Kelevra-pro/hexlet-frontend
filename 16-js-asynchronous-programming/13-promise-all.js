import path from 'path';
import _ from 'lodash';
import fs from 'fs/promises';

export const getDirectorySize = (dirPath) => {
  const promise = fs.readdir(dirPath).then((filenames) => {
    const filePaths = filenames.map((name) => path.join(dirPath, name));
    const promises = filePaths.map(fs.stat);

    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};
