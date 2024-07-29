#!/usr/bin/env node
const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1><filepath2>')
  .option('-f, --format [type]', 'output format')

program.parse();

const options = program.opts();

// export default genDiff; //ещё не написана
