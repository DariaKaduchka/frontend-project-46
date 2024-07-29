#!/usr/bin/env node
const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.Compares two configuration files and shows a difference.')
  .version('1.0.0');

program.parse();

const options = program.opts();

export default genDiff; //ещё не написана
