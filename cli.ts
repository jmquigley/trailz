#!/usr/bin/env node

'use strict';

import * as fs from 'fs-extra';
import {nl} from 'util.toolbox';
import {Maze} from './index';

const yargs = require('yargs')
	.usage('Usage: $0 -r {#} -c {#} -o {file.txt} -a {BinaryTree} -v')
	.describe('alg', 'The algorithm to use for the generation')
	.alias('alg', 'a')
	.nargs('alg', 1)
	.default('alg', 'BinaryTree')
	.describe('cols', 'The number of columns in the maze')
	.alias('cols', 'c')
	.nargs('cols', 1)
	.default('cols', 10)
	.describe('output', 'The output file to save the maze structure')
	.alias('output', 'o')
	.nargs('output', 1)
	.default('output', 'maze.txt')
	.describe('rows', 'The number of rows in the maze')
	.alias('rows', 'r')
	.nargs('rows', 1)
	.default('rows', 10)
	.describe('verbose', 'Print the output to the terminal')
	.alias('verbose', 'v')
	.default('verbose', false)
	.help()
	.showHelpOnFail(false, 'Specify --help for available options');

const argv = yargs.argv;
const maze = new Maze(argv.rows, argv.cols, argv.algorithm);

fs.writeFileSync(argv.output, maze.string + nl + nl + maze.srepr + nl);

if (argv.verbose) {
	console.log(maze.string + nl);
	console.log(maze.srepr + nl);
}
