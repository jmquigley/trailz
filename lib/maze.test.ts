"use strict";

const assert = require("power-assert");

import {AlgorithmType, Maze} from "../index";

test("Creates an Maze object instance using BinaryTree", () => {
	const maze = new Maze(10, 10, AlgorithmType.BinaryTree);

	assert(maze);
	assert(maze.cols === 10);
	assert(maze.rows === 10);

	assert(maze.algorithm === AlgorithmType.BinaryTree);
	assert(typeof maze.string === "string");
	assert(maze.repr);
	console.log(`BinaryTree(10,10)\n${maze.string}`);
	console.log(maze.srepr);

	maze.rebuild(AlgorithmType.BinaryTree);
	assert(maze.cols === 10);
	assert(maze.rows === 10);
	assert(maze.algorithm === AlgorithmType.BinaryTree);
	console.log(`BinaryTree(10,10) rebuild =>\n${maze.string}`);

	maze.resize(5, 5);
	assert(maze.cols === 5);
	assert(maze.rows === 5);
	assert(maze.algorithm === AlgorithmType.BinaryTree);
	console.log(`BinaryTree(5,5) resize =>\n${maze.string}`);
	console.log(maze.srepr);

	assert(maze.grid.deadends);
});

test("Create a maze with bad parameters for sizing", () => {
	const maze = new Maze(-1, -1);

	assert(maze);
	assert(maze.cols === 1);
	assert(maze.rows === 1);
	assert(maze.algorithm === AlgorithmType.RecursiveBacktracker);
	console.log(`BinaryTree(1,1) resize =>\n${maze.string}`);
	console.log(maze.srepr);
});

test("Creates a Maze object instance using Sidewinder", () => {
	const maze = new Maze(10, 10, AlgorithmType.Sidewinder);
	assert(maze);
	assert(maze.cols === 10);
	assert(maze.rows === 10);
	assert(maze.algorithm === AlgorithmType.Sidewinder);
	assert(typeof maze.string === "string");
	console.log(`Sidewinder(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test("Creates a Maze object instance using AldousBroder", () => {
	const maze = new Maze(10, 10, AlgorithmType.AldousBroder);
	assert(maze);
	assert(maze.cols === 10);
	assert(maze.rows === 10);
	assert(maze.algorithm === AlgorithmType.AldousBroder);
	assert(typeof maze.string === "string");
	console.log(`AldousBroder(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test("Creates a Maze object instance using Wilsons algorithm", () => {
	const maze = new Maze(10, 10, AlgorithmType.Wilsons);
	assert(maze);
	assert(maze.cols === 10);
	assert(maze.rows === 10);
	assert(maze.algorithm === AlgorithmType.Wilsons);
	assert(typeof maze.string === "string");
	console.log(`Wilsons(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test("Creates a Maze object instance using the HuntAndKill algorithm", () => {
	const maze = new Maze(10, 10, AlgorithmType.HuntAndKill);
	assert(maze);
	assert(maze.cols === 10);
	assert(maze.rows === 10);
	assert(maze.algorithm === AlgorithmType.HuntAndKill);
	assert(typeof maze.string === "string");
	console.log(`HuntAndKill(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test("Creates a Maze object instance using the RecursiveBacktracker algorithm", () => {
	const maze = new Maze(10, 10, AlgorithmType.RecursiveBacktracker);
	assert(maze);
	assert(maze.cols === 10);
	assert(maze.rows === 10);
	assert(maze.algorithm === AlgorithmType.RecursiveBacktracker);
	assert(typeof maze.string === "string");
	console.log(`RecursiveBacktracker(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});
