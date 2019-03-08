"use strict";

import * as _ from "lodash";
import {nl} from "util.constants";
import {Cell} from "./cell";

const pkg = require("../package.json");

/**
 * This class represents an array of cells by row and column
 */
export class Grid {
	private _cols: number;
	private _debug: boolean;
	private _flat: Cell[];
	private _grid: Cell[][];
	private _repr: number[][];
	private _rows: number;

	constructor(rows: number, cols: number, debug: boolean = false) {
		this._rows = rows;
		this._cols = cols;
		this._debug = debug;

		let cell;

		this._grid = new Array(this.rows);
		this._repr = new Array(this.rows);
		this._flat = new Array(this.size);

		for (let row = 0; row < this.rows; row++) {
			this._grid[row] = new Array(cols);
			this._repr[row] = new Array(cols);

			for (let col = 0; col < cols; col++) {
				cell = new Cell(row, col);
				this._grid[row][col] = cell;
				this._repr[row][col] = cell.repr;
			}
		}

		this.reset();
	}

	/**
	 * @return {number} the total number of columns in the grid container
	 */
	get cols(): number {
		return this._cols;
	}

	/**
	 * @return {Cell[]} a list of cells that are dead ends within the grid
	 */
	get deadends(): Cell[] {
		const out: Cell[] = [];

		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				const cell: Cell = this.at(row, col);
				if (cell.links.length === 1) {
					out.push(cell);
				}
			}
		}

		return out;
	}

	/**
	 * @return {Cell[]} an array copy of all cells in the grid as a 1D array.
	 */
	get flatten(): Cell[] {
		return this._flat.slice();
	}

	/**
	 * @return {Cell} a random cell location from the grid
	 */
	get random(): Cell {
		return this.at(_.random(this.rows - 1), _.random(this.cols - 1));
	}

	/**
	 * @return {number[][]} a byte representation of the current maze.
	 */
	get repr(): number[][] {
		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				this._repr[row][col] = this.at(row, col).repr;
			}
		}

		return this._repr;
	}

	/**
	 * @return {number} the total number of rows in the grid
	 */
	get rows(): number {
		return this._rows;
	}

	/**
	 * @return {number} the total size of the grid container
	 */
	get size(): number {
		return this.rows * this.cols;
	}

	/**
	 * Retrieves a cell at the requested location.  If the location is outside
	 * of the grid, then null is returned.
	 * @param row {number} the row in the grid
	 * @param col {number} the column in the grid
	 * @returns {Cell} the cell within the grid location.  If outside the range
	 * then null.
	 */
	public at(row: number, col: number): Cell {
		if (
			row < 0 ||
			row > this.rows - 1 ||
			(col < 0 || col > this.cols - 1)
		) {
			return null;
		}

		return this._grid[row][col];
	}

	/**
	 * Resets the internal state of the grid so that the algorithm can be
	 * reapplied.
	 */
	public reset(): void {
		this._flat = [];

		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				const cell = this.at(row, col);
				cell.reset();
				this._flat.push(cell);

				cell.north = this.at(row - 1, col);
				cell.south = this.at(row + 1, col);
				cell.east = this.at(row, col + 1);
				cell.west = this.at(row, col - 1);
			}
		}
	}

	public toString(): string {
		const s: string[] = ["+" + "---+".repeat(this.cols)];

		for (let row = 0; row < this.rows; row++) {
			let top = "|";
			let bottom = "+";

			for (let col = 0; col < this.cols; col++) {
				const cell = this.at(row, col);

				let body;
				if (pkg.debug || this._debug) {
					body = `${cell.row},${cell.col}`;
				} else {
					body = "   ";
				}

				const eastBoundary = cell.linked(cell.east) ? " " : "|";
				top += body + eastBoundary;

				const southBoundary = cell.linked(cell.south) ? "   " : "---";
				const corner = "+";
				bottom += southBoundary + corner;
			}

			s.push(top);
			s.push(bottom);
		}

		return s.join(nl);
	}

	public *[Symbol.iterator]() {
		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				yield this.at(row, col);
			}
		}
	}
}
