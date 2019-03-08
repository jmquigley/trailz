"use strict";

const assert = require("power-assert");

import {Cell} from "../index";

test("Test creation of a single Cell container", () => {
	const cell = new Cell(0, 0);

	assert(cell);
	assert(cell.row === 0);
	assert(cell.col === 0);

	const cell2 = new Cell(1, 1);

	assert(cell2);
	assert(cell2.row === 1);
	assert(cell2.row === 1);

	cell.link(cell2);

	assert(cell.links.length === 1);
	assert(cell2.links.length === 1);
	assert(!cell.linksEmpty);

	assert(cell.linked(cell2));
	assert(cell2.linked(cell));

	cell.unlink(cell2);

	assert(cell.links.length === 0);
	assert(cell2.links.length === 0);
	assert(cell.linksEmpty);

	assert(!cell.linked(cell2));
	assert(!cell2.linked(cell));
});

test("Test bitmap representations for a cell", () => {
	const cell = new Cell(2, 2);

	cell.north = new Cell(2, 1);
	assert(cell.north);

	cell.east = new Cell(3, 2);
	assert(cell.east);

	cell.south = new Cell(2, 3);
	assert(cell.south);

	cell.west = new Cell(1, 2);
	assert(cell.west);

	assert(cell);
	assert(cell.row === 2);
	assert(cell.col === 2);
	assert(cell.repr === 15);

	cell.link(cell.north);
	assert(cell.linked(cell.north));
	assert(cell.repr === 7);
	cell.unlink(cell.north);
	assert(cell.repr === 15);

	cell.link(cell.east);
	assert(cell.linked(cell.east));
	assert(cell.repr === 11);
	cell.unlink(cell.east);
	assert(cell.repr === 15);

	cell.link(cell.south);
	assert(cell.linked(cell.south));
	assert(cell.repr === 13);
	cell.unlink(cell.south);
	assert(cell.repr === 15);

	cell.link(cell.west);
	assert(cell.linked(cell.west));
	assert(cell.repr === 14);
	cell.unlink(cell.west);
	assert(cell.repr === 15);
});

test("Test Cell neighbors", () => {
	const cell = new Cell(0, 0);
	const neighbor = new Cell(1, 1);

	assert(cell);
	assert(neighbor);
	assert(cell.linksEmpty);
	assert(cell.neighbors.length === 0);

	cell.link(neighbor);
	cell.north = neighbor;
	assert(!cell.linksEmpty);
	assert(cell.neighbors.length === 1);

	cell.south = neighbor;
	assert(!cell.linksEmpty);
	assert(cell.neighbors.length === 2);
});

test("Test Cell unlinked neighbors", () => {
	const cell = new Cell(1, 1);
	const north = new Cell(1, 0);
	const south = new Cell(1, 2);
	const east = new Cell(0, 1);
	const west = new Cell(2, 1);

	assert(cell);
	assert(north);
	assert(south);
	assert(east);
	assert(west);

	cell.north = north;
	cell.south = south;
	cell.east = east;
	cell.west = west;

	assert(cell.linksEmpty);
	assert(cell.neighbors.length === 4);
	assert(cell.unvisitedNeighbors.length === 4);
	assert(cell.visitedNeighbors.length === 0);

	cell.link(north);

	assert(cell.neighbors.length === 4);
	assert(cell.unvisitedNeighbors.length === 3);
	assert(cell.visitedNeighbors.length === 1);

	assert(cell.visitedNeighbors[0] === north);
	assert(cell.unvisitedNeighbors[0] === south);
	assert(cell.unvisitedNeighbors[1] === east);
	assert(cell.unvisitedNeighbors[2] === west);

	cell.link(south);
	cell.link(east);
	cell.link(west);

	assert(cell.neighbors.length === 4);
	assert(cell.unvisitedNeighbors.length === 0);
	assert(cell.visitedNeighbors.length === 4);

	assert(cell.visitedNeighbors[0] === north);
	assert(cell.visitedNeighbors[1] === south);
	assert(cell.visitedNeighbors[2] === east);
	assert(cell.visitedNeighbors[3] === west);
});
