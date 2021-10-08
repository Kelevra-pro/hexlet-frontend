import _ from 'lodash';
import { getChildren, getMeta, getName, isFile, mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);




const calculateFilesSize = (node) => {
  if (isFile(node)) {
    const meta = getMeta(node);

    return meta.size;
  }

  const children = getChildren(node);
  const sizes = children.map(calculateFilesSize);

  return _.sum(sizes);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), calculateFilesSize(child)]);
  result.sort(([, size1], [, size2]) => size2 - size1);

  return result;
};

// export default du;

du(tree);
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]

du(getChildren(tree)[0]);
// [
//   ['consul', 9480],
//   ['nginx', 800],
//   ['apache', 0],
// ]

