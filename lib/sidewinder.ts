/**
 * Implementation of the Sidewinder maze algorithm from the book
 * "Mazes for Programmers".  In this algorithm we iterate through
 * the rows.  With each row we then iterate through each column.
 * As each column is encountered we decide if we can continue to
 * move east (or a random chance to stop).  If we can continue, push
 * that cell into a list of "runs".  When the stop condition occurs
 * we choose a random value from the list of runs and link it
 * to its northern neighbor.  Continue this process until all rows
 * and their respective columns are encountered.
 *
 * #### Examples:
 *
 * ```javascript
 * import {AlgorithmType, Maze} from 'trailz';
 *
 * const maze = new Maze(10, 10, AlgorithmType.Sidewinder);
 * console.log(maze.string);
 * ```
 *
 * @module Sidewinder
 */

"use strict";

import * as _ from "lodash";
import {Algorithm} from "./algorithm";
import {Cell} from "./cell";
import {Grid} from "./grid";

export class Sidewinder implements Algorithm {
	public process(grid: Grid): Grid {
		for (let row = 0; row < grid.rows; row++) {
			let run = [];

			for (let col = 0; col < grid.cols; col++) {
				const cell: Cell = grid.at(row, col);
				run.push(cell);

				const atEastBoundary: boolean = cell.east == null;
				const atNorthBoundary: boolean = cell.north == null;
				const closeOut: boolean =
					atEastBoundary || (!atNorthBoundary && _.random(3) === 0);

				if (closeOut) {
					const member = _.sample(run);
					if (member && member.north) {
						member.link(member.north);
					}
					run = [];
				} else {
					cell.link(cell.east);
				}
			}
		}

		return grid;
	}
}
