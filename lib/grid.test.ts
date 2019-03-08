"use strict";

const assert = require("power-assert");

import {Cell, Grid} from "../index";

test("Create and verify the grid component", () => {
	const cols = 10;
	const rows = 10;

	const grid = new Grid(cols, rows, true);
	let cell: Cell;

	assert(grid);

	assert(grid.rows === rows);
	assert(grid.cols === cols);
	assert(grid.size === rows * cols);

	const flat = grid.flatten;
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			cell = grid.at(row, col);
			assert(cell);
			assert(cell instanceof Cell);
			assert(cell === flat[row * cols + col]);
		}
	}

	// validate top left corner
	cell = grid.at(0, 0);
	assert(cell);

	assert(!cell.north);

	assert(cell.south);
	expect(cell.south.row === 1);
	expect(cell.south.col === 0);

	assert(cell.east);
	assert(cell.east.row === 0);
	assert(cell.east.col === 1);

	assert(!cell.west);
	assert(cell.neighbors.length === 2);

	// validate top right corner
	cell = grid.at(0, cols - 1);
	assert(cell);

	assert(!cell.north);

	assert(cell.south);
	assert(cell.south.row === 1);
	assert(cell.south.col === cols - 1);

	assert(cell.west);
	assert(cell.west.row === 0);
	assert(cell.west.col === cols - 2);

	assert(!cell.east);
	assert(cell.neighbors.length === 2);

	// validate bottom left corner
	cell = grid.at(rows - 1, 0);
	assert(cell);

	assert(!cell.south);

	assert(cell.north);
	assert(cell.north.row === rows - 2);
	assert(cell.north.col === 0);

	assert(cell.east);
	assert(cell.east.row === rows - 1);
	assert(cell.east.col === 1);

	assert(!cell.west);
	assert(cell.neighbors.length === 2);

	// validate bottom right corner
	cell = grid.at(rows - 1, cols - 1);
	assert(cell);

	assert(!cell.south);

	assert(cell.north);
	assert(cell.north.row === rows - 2);
	assert(cell.north.col === cols - 1);

	assert(cell.west);
	assert(cell.west.row === rows - 1);
	assert(cell.west.col === cols - 2);

	assert(!cell.east);
	assert(cell.neighbors.length === 2);

	assert(typeof grid.toString() === "string");
	assert(grid.deadends);
});

test("Test the iterator and toString function for a Cell", () => {
	const cols = 10;
	const rows = 10;

	const grid = new Grid(cols, rows);

	assert(grid);
	assert(grid.rows === rows);
	assert(grid.cols === cols);
	assert(grid.size === rows * cols);

	for (const cell of grid) {
		assert(cell instanceof Cell);
		assert(typeof cell.toString() === "string");
	}
});

test("Test retrieval of random cells within the grid", () => {
	const cols = 10;
	const rows = 10;
	const n: number = 100;

	const grid = new Grid(cols, rows);

	assert(grid);
	assert(grid.rows === rows);
	assert(grid.cols === cols);
	assert(grid.size === rows * cols);

	for (let i = 0; i < n; i++) {
		assert(grid.random instanceof Cell);
	}
});

test("Try to retrieve a bad location from the grid", () => {
	let cell: Cell;
	const cols = 10;
	const rows = 10;

	const grid = new Grid(cols, rows);

	cell = grid.at(1, 1);
	assert(cell);

	cell = grid.at(-1, -1);
	assert(!cell);

	cell = grid.at(-5, -5);
	assert(!cell);
});
