import path from 'path';
import { isFile, getName, getChildren, mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const findFilesByName = (tree, searchString) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(searchString) ? newAncestry : [];
    }
    const children = getChildren(node);

    return children.flatMap((child) => iter(child, newAncestry));
  };

  return iter(tree, '');
};

// export default findFilesByName;

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

findFilesByName(tree, 'co');
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
