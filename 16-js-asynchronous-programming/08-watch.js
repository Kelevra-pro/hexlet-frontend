import fs from 'fs';

const watch = (filePath, period, cb) => {
  let lastCheck = Date.now();

  const checkFileChange = (timerId) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }

      if (stats.mtimeMs > lastCheck) {
        cb(null);
        lastCheck = stats.mtimeMs;
      }
    });
  };

  const timerId = setInterval(() => checkFileChange(timerId), period);

  return timerId;
};

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});
