import fs from 'fs/promises';

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filePaths) => filePaths.reduce((acc, path) => {
  return acc.then((content) => fs.stat(path)
    .then((stats) => content.concat(getTypeName(stats)))
    .catch(() => content.concat(null)));
}, Promise.resolve([]));
