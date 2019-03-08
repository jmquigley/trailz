/**
 * Implements the AldousBroder maze algorithm from the book
 * "Mazes for Programmers".  This algorithm works by randomly choosing cells
 * in the grid.  If that cell has never visited an neighbor (carved a path)
 * then it randomly samples its neighbor list and uses that neighbor to
 * select a path.  This removes many of the biases that exist within the
 * BinaryTree or Sidewinder algorithms because all mazes have a chance of
 * occurring.
 *
 * #### Examples:
 *
 * ```javascript
 * import {AlgorithmType, Maze} from 'trailz';
 *
 * const maze = new Maze(10, 10, AlgorithmType.AldousBroder);
 * console.log(maze.string);
 * ```
 *
 * @module AldousBroder
 */

"use strict";

import * as _ from "lodash";
import {Algorithm} from "./algorithm";
import {Cell} from "./cell";
import {Grid} from "./grid";

export class AldousBroder implements Algorithm {
	public process(grid: Grid): Grid {
		let cell: Cell = grid.random;
		let unvisited = grid.size - 1;

		while (unvisited > 0) {
			const neighbor = _.sample(cell.neighbors);

			if (neighbor.linksEmpty) {
				cell.link(neighbor);
				unvisited--;
			}

			cell = neighbor;
		}

		return grid;
	}
}
