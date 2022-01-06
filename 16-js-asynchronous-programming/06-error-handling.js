import fs from 'fs';

export const move = (from, to, cb) => {
  fs.readFile(from, 'utf-8', (err1, data) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.writeFile(to, data, (err2) => {
      if (err2) {
        cb(err2);
        return;
      }
      fs.unlink(from, cb);
    });
  });
};

move('/opt/myfile', '/tmp/newfile', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!');
});
