import fsp from 'fs/promises';

export const touch = (filePath) => fsp.access(filePath)
  .catch(() => fsp.writeFile(filePath, ''));
