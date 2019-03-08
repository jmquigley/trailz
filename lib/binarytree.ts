/**
 * Implementation of the BinaryTree maze algorithm from the book
 * "Mazes for Programmers".  This algorithm works by visiting each cell
 * in the grid and choosing to carve a passage either north or south.
 *
 * #### Examples:
 *
 * ```javascript
 * import {AlgorithmType, Maze} from 'trailz';
 *
 * const maze = new Maze(10, 10, AlgorithmType.BinaryTree);
 * console.log(maze.string);
 * ```
 *
 * Creates a 10x10 grid and uses the BinaryTree algorithm to carve a
 * maze.  The `.string` property will return an ascii representation
 * of the maze.
 *
 *
 * @module BinaryTree
 */

"use strict";

import * as _ from "lodash";
import {Algorithm} from "./algorithm";
import {Cell} from "./cell";
import {Grid} from "./grid";

export class BinaryTree implements Algorithm {
	public process(grid: Grid): Grid {
		for (const cell of grid) {
			const neighbors: Cell[] = [];

			if (cell.north) neighbors.push(cell.north);
			if (cell.east) neighbors.push(cell.east);

			const neighbor: Cell = _.sample(neighbors);

			if (neighbor) {
				cell.link(neighbor);
			}
		}

		return grid;
	}
}
