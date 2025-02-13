import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

const getAbsoluteFilePath = (filePath) => {
  // const fileName = filePath.split('/').at(-1);
  const absoluteFilePath = resolve(cwd(), './_fixtures_', filePath);

  return absoluteFilePath;
};

const parseFileToObj = (filePath) => {
  const absoluteFilePath = getAbsoluteFilePath(filePath);
  // const fileExtension = filePath.split('/').at(-1).split('/').at(-1);

  return JSON.parse(readFileSync(absoluteFilePath));
};

export default parseFileToObj;
