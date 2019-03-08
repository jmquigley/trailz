#!/usr/bin/env node

"use strict";

import * as fs from "fs-extra";
import {nl} from "util.constants";
import {AlgorithmType, getAlgorithmType, Maze} from "./index";

const usage: string[] = [
	"Usage: $0 -r {#} -c {#} -o {file.txt} -a {RecursiveBacktracker} -v",
	"",
	"Algorithms:"
];

for (const it in AlgorithmType) {
	if (AlgorithmType.hasOwnProperty(it)) {
		usage.push(` - ${it}`);
	}
}

const yargs = require("yargs")
	.usage(usage.join(nl))
	.describe(
		"algorithm",
		"The algorithm to use for the generation (listed above)"
	)
	.alias("algorithm", "a")
	.nargs("algorithm", 1)
	.default("algorithm", "RecursiveBacktracker")
	.describe("cols", "The number of columns in the maze")
	.alias("cols", "c")
	.nargs("cols", 1)
	.default("cols", 10)
	.describe("output", "The output file to save the maze structure")
	.alias("output", "o")
	.nargs("output", 1)
	.default("output", "maze.txt")
	.describe("rows", "The number of rows in the maze")
	.alias("rows", "r")
	.nargs("rows", 1)
	.default("rows", 10)
	.describe("verbose", "Print the output to the terminal")
	.alias("verbose", "v")
	.default("verbose", false)
	.help()
	.showHelpOnFail(false, "Specify --help for available options");

const argv = yargs.argv;
const alg = getAlgorithmType(argv.algorithm);
const maze = new Maze(argv.rows, argv.cols, alg);

const out: string[] = [];

out.push(`${alg}(${maze.rows}, ${maze.cols})`);
out.push(`Dead ends: ${maze.grid.deadends.length}`);
out.push("");
out.push(maze.string);
out.push("");
out.push(maze.srepr);
out.push("");

fs.writeFileSync(argv.output, out.join(nl));

if (argv.verbose) {
	console.log(out.join(nl));
}
