/**
 * Implementation of Wilson's maze algorithm from the book
 * "Mazes for Programmers".  Performs a random walk through the grid.  It
 * watches for loops that occur during the walk and removes them from the
 * path that may be generated.  Note that the path is not carved from the
 * grid initially.  It will keep forming a possible path until it hits a
 * previously visited cell.   When the loop terminates the path that was
 * built represents a unique path from the random start to the previously
 * visited node (with no loops).  This path is carved into the grid.
 * After a path is carved a new random start location is selected from
 * locations that have not been visited and the process continues until
 * there are no more unvisited cells.
 *
 * #### Examples:
 *
 * ```javascript
 * import {AlgorithmType, Maze} from 'trailz';
 *
 * const maze = new Maze(10, 10, AlgorithmType.Wilsons);
 * console.log(maze.string);
 * ```
 *
 * @module Wilsons
 */

"use strict";

import * as _ from "lodash";
import {Algorithm} from "./algorithm";
import {Cell} from "./cell";
import {Grid} from "./grid";

export class Wilsons implements Algorithm {
	public process(grid: Grid): Grid {
		const unvisited: Cell[] = grid.flatten;
		const first = _.sample(unvisited);

		unvisited.splice(unvisited.indexOf(first), 1);

		while (unvisited.length > 0) {
			let cell = _.sample(unvisited);
			let path: Cell[] = [cell];

			while (unvisited.includes(cell)) {
				cell = _.sample(cell.neighbors);
				const position = path.indexOf(cell);

				if (position !== -1) {
					path = path.slice(0, position + 1);
				} else {
					path.push(cell);
				}
			}

			for (let i = 0; i <= path.length - 2; i++) {
				path[i].link(path[i + 1]);
				unvisited.splice(unvisited.indexOf(path[i]), 1);
			}
		}

		return grid;
	}
}
