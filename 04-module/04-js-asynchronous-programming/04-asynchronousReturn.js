import fs from 'fs';

const write = (filename, data, cb) => {
  fs.writeFile(filename, data, cb);
};

write('./myfile', 'data', () => {
  console.log('success');
});
