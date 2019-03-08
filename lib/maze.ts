/**
 * Creates an instance of a Maze structure.  A maze is created within an
 * M x N grid of cells.  This grid is then given to a processing Algorithm
 * to carve out passages within the grid.
 *
 * #### Examples:
 *
 * ```javascript
 * import {AlgorithmType, Maze} from 'trailz';
 * const maze = new Maze(10, 10, AlgorithmType.BinaryTree);
 * console.log(maze.string);
 * ```
 *
 * @module Maze
 */

"use strict";

import {sprintf} from "sprintf-js";
import {nl} from "util.constants";
import {
	AldousBroder,
	Algorithm,
	AlgorithmType,
	BinaryTree,
	HuntAndKill,
	RecursiveBacktracker,
	Sidewinder,
	Wilsons
} from "./algorithm";
import {Grid} from "./grid";

interface Algorithms {
	[key: string]: Algorithm;
}

export class Maze {
	private _algorithm: AlgorithmType;
	private _algorithms: Algorithms = {
		[AlgorithmType.AldousBroder]: new AldousBroder(),
		[AlgorithmType.BinaryTree]: new BinaryTree(),
		[AlgorithmType.HuntAndKill]: new HuntAndKill(),
		[AlgorithmType.RecursiveBacktracker]: new RecursiveBacktracker(),
		[AlgorithmType.Sidewinder]: new Sidewinder(),
		[AlgorithmType.Wilsons]: new Wilsons()
	};

	private _grid: Grid;

	constructor(
		rows: number,
		cols: number,
		algorithm: AlgorithmType = AlgorithmType.RecursiveBacktracker
	) {
		if (rows < 1) rows = 1;
		if (cols < 1) cols = 1;

		this.resize(rows, cols, algorithm);

		console.log(`Finished creating maze with ${this.algorithm}`);
	}

	/**
	 * @return {string} the algorithm currently set within this instance.
	 */
	get algorithm(): AlgorithmType {
		return this._algorithm;
	}

	/**
	 * @return {number} the number of columns in this maze
	 */
	get cols(): number {
		return this._grid.cols;
	}

	/**
	 * @return {Grid} returns a reference to the grid within the Maze instance
	 */
	get grid(): Grid {
		return this._grid;
	}

	/**
	 * @return {number[][]} a 2D array that represents how each cell is drawn
	 */
	get repr(): number[][] {
		return this._grid.repr;
	}

	/**
	 * @return {number} the number of rows in this maze
	 */
	get rows(): number {
		return this._grid.rows;
	}

	/**
	 * @return {string} a string representation of the 2D repr array
	 */
	get srepr(): string {
		let line: string[];
		const repr = this._grid.repr;
		const out: string[] = [];

		for (let row = 0; row < this.rows; row++) {
			line = [];
			for (let col = 0; col < this.cols; col++) {
				line.push(sprintf("%3d", repr[row][col]));
			}
			out.push(line.join(","));
		}

		return out.join(nl);
	}

	/**
	 * @return {string} an ASCII string representation of the maze
	 */
	get string(): string {
		return this._grid.toString();
	}

	/**
	 * Takes a given maze algorithm, resets the gride and applies this algorithm to the
	 * grid.  The previous grid is lost with this operation.
	 * @param algorithm {AlgorithmType} the algorithm that will be applied to the grid.
	 * this is an enumeration with the possible types that can be generated.
	 */
	public rebuild(algorithm: AlgorithmType) {
		this._algorithm = algorithm;
		this._grid.reset();
		this._algorithms[algorithm].process(this._grid);
	}

	/**
	 * Allows one to change the initial size of the grid.  This will created the grid and
	 * apply the given algorithm to the newly sized grid.
	 * @param rows {number} the new number of rows in this grid
	 * @param cols {number} the new number of cols in this grid
	 * @param [algorithm] {AlgorithmType} the maze algorithm that will be applied to the
	 * grid.  If one is not given, then the initial algorithm is reapplied.
	 */
	public resize(
		rows: number,
		cols: number,
		algorithm: AlgorithmType = this.algorithm
	) {
		this._grid = new Grid(rows, cols);
		this.rebuild(algorithm);
	}
}
