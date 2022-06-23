import * as fs from 'fs';

const print = (_error, data) => console.log(data);
export default (filepath) => fs.readFile(filepath, 'utf-8', print);
