#!/usr/bin/env node
/* eslint-disable import/extensions */

import { program } from 'commander';
import parseFileToObj from './parser.js';
import genDiff from './Diff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const config1 = parseFileToObj(filepath1);
    const config2 = parseFileToObj(filepath2);

    const diff = genDiff(config1, config2);
    console.log(diff);
  });

program.parse();
