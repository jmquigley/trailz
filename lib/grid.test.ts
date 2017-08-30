'use strict';

import test from 'ava';
import {Cell, Grid} from '../index';

test('Create and verify the grid component', t => {
	const cols = 10;
	const rows = 10;

	const grid = new Grid(cols, rows, true);
	let cell: Cell;

	t.truthy(grid);
	t.is(grid.rows, rows);
	t.is(grid.cols, cols);
	t.is(grid.size, rows * cols);

	const flat = grid.flatten;
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			cell = grid.at(row, col);
			t.truthy(cell);
			t.true(cell instanceof Cell);
			t.is(cell, flat[(row * cols) + col]);
		}
	}

	// validate top left corner
	cell = grid.at(0, 0);
	t.truthy(cell);

	t.falsy(cell.north);

	t.truthy(cell.south);
	t.is(cell.south.row, 1);
	t.is(cell.south.col, 0);

	t.truthy(cell.east);
	t.is(cell.east.row, 0);
	t.is(cell.east.col, 1);

	t.falsy(cell.west);
	t.is(cell.neighbors.length, 2);

	// validate top right corner
	cell = grid.at(0, cols - 1);
	t.truthy(cell);

	t.falsy(cell.north);

	t.truthy(cell.south);
	t.is(cell.south.row, 1);
	t.is(cell.south.col, cols - 1);

	t.truthy(cell.west);
	t.is(cell.west.row, 0);
	t.is(cell.west.col, cols - 2);

	t.falsy(cell.east);
	t.is(cell.neighbors.length, 2);

	// validate bottom left corner
	cell = grid.at(rows - 1, 0);
	t.truthy(cell);

	t.falsy(cell.south);

	t.truthy(cell.north);
	t.is(cell.north.row, rows - 2);
	t.is(cell.north.col, 0);

	t.truthy(cell.east);
	t.is(cell.east.row, rows - 1);
	t.is(cell.east.col, 1);

	t.falsy(cell.west);
	t.is(cell.neighbors.length, 2);

	// validate bottom right corner
	cell = grid.at(rows - 1, cols - 1);
	t.truthy(cell);

	t.falsy(cell.south);

	t.truthy(cell.north);
	t.is(cell.north.row, rows - 2);
	t.is(cell.north.col, cols - 1);

	t.truthy(cell.west);
	t.is(cell.west.row, rows - 1);
	t.is(cell.west.col, cols - 2);

	t.falsy(cell.east);
	t.is(cell.neighbors.length, 2);

	t.true(typeof grid.toString() === 'string');
});

test('Test the iterator and toString function for a Cell', t => {
	const cols = 10;
	const rows = 10;

	const grid = new Grid(cols, rows);

	t.truthy(grid);
	t.is(grid.rows, rows);
	t.is(grid.cols, cols);
	t.is(grid.size, rows * cols);

	for (const cell of grid) {
		t.true(cell instanceof Cell);
		t.true(typeof cell.toString() === 'string');
	}
});

test('Test retrieval of random cells within the grid', t => {
	const cols = 10;
	const rows = 10;
	const n: number = 100;

	const grid = new Grid(cols, rows);

	t.truthy(grid);
	t.is(grid.rows, rows);
	t.is(grid.cols, cols);
	t.is(grid.size, rows * cols);

	for (let i = 0; i < n; i++) {
		t.truthy(grid.random instanceof Cell);
	}
});

test('Try to retrieve a bad location from the grid', t => {
	let cell: Cell;
	const cols = 10;
	const rows = 10;

	const grid = new Grid(cols, rows);

	cell = grid.at(1, 1);
	t.truthy(cell);

	cell = grid.at(-1, -1);
	t.falsy(cell);

	cell = grid.at(-5, -5);
	t.falsy(cell);
});
