'use strict';

import test from 'ava';
import {AlgorithmType, Maze} from '../index';

test('Creates an Maze object instance', t => {
	const maze = new Maze(10, 10);
	t.truthy(maze);
	t.true(typeof maze.string === 'string');

	console.log(maze.string);
	maze.rebuild(AlgorithmType.BinaryTree);
	console.log(maze.string);
});
