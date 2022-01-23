import fs from 'fs/promises';

export const exchange = async (filePath1, filePath2) => {
  const reading1 = fs.readFile(filePath1);
  const reading2 = fs.readFile(filePath2);
  const [data1, data2] = await Promise.all([reading1, reading2]);
  const writing1 = fs.writeFile(filePath1, data2);
  const writing2 = fs.writeFile(filePath2, data1);
  await Promise.all([writing1, writing2]);
};
