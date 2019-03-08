/**
 * Implementation of the Recursive Backtracking maze algorithm from the book
 * "Mazes for Programmers".  Similar to the Hunt and Kill algorithm.  The
 * algorithm selects unvisited neighbors from the current location.  If it
 * is not empty, then one of the unvisited neighbors are randomly selected.
 * That selected neighbor is linked to the current value and the neighbor
 * is pushed on the stack.  If there are no neighbors, then an item is
 * removed from the stack and the process continues until th stack is
 * empty.
 *
 * #### Examples:
 *
 * ```javascript
 * import {AlgorithmType, Maze} from 'trailz';
 *
 * const maze = new Maze(10, 10, AlgorithmType.RecursiveBacktracker);
 * console.log(maze.string);
 * ```
 *
 * @module RecursiveBacktracker
 */

"use strict";

import * as _ from "lodash";
import {Stack} from "util.ds";
import {Algorithm} from "./algorithm";
import {Cell} from "./cell";
import {Grid} from "./grid";

export class RecursiveBacktracker implements Algorithm {
	public process(grid: Grid): Grid {
		const stack = new Stack<Cell>();
		stack.push(grid.random);

		while (!stack.empty) {
			const current: Cell = stack.top();
			const neighbors = current.unvisitedNeighbors;

			if (neighbors.length === 0) {
				stack.pop();
			} else {
				const neighbor = _.sample(neighbors);
				current.link(neighbor);
				stack.push(neighbor);
			}
		}

		return grid;
	}
}
