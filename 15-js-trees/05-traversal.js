import {
  getChildren,
  getMeta,
  getName,
  isFile,
  mkdir,
  mkfile,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (node) => {
  const name = getName(node);
  const newMeta = _.cloneDeep(getMeta(node));

  if (isFile(node)) {
    return mkfile(name.toLowerCase(), newMeta);
  }

  const children = getChildren(node);
  const newChildren = children.map((child) => downcaseFileNames(child));

  return mkdir(name, newChildren, newMeta);
};

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

downcaseFileNames(tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }
