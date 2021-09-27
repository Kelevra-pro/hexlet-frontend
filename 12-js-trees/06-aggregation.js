import _ from 'lodash';
import {
  getChildren,
  getName,
  isFile,
  mkdir,
  mkfile,
} from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (node) => {
  const name = getName(node);

  if (isFile(node)) {
    return name.startsWith('.') ? 1 : 0;
  }

  const children = getChildren(node);
  const hiddenFilesCount = children.map(getHiddenFilesCount);

  return _.sum(hiddenFilesCount);
};

// export default getHiddenFilesCount;

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

getHiddenFilesCount(tree); // 3
