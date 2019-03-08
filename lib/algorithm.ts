import {AldousBroder} from "./aldousbroder";
import {BinaryTree} from "./binarytree";
import {Grid} from "./grid";
import {HuntAndKill} from "./huntandkill";
import {RecursiveBacktracker} from "./recursivebacktracker";
import {Sidewinder} from "./sidewinder";
import {Wilsons} from "./wilsons";

export interface Algorithm {
	process(grid: Grid): Grid;
}

export enum AlgorithmType {
	AldousBroder = "AldousBroder",
	BinaryTree = "BinaryTree",
	HuntAndKill = "HuntAndKill",
	RecursiveBacktracker = "RecursiveBacktracker",
	Sidewinder = "Sidewinder",
	Wilsons = "Wilsons"
}

/**
 * Takes a string, generally from the command line, and determines
 * the requested algorithm.  It will default to BinaryTree if a
 * valid name is not given.
 * @param name {string} the name of the requested algorithm
 * @return {AlgorithmType} the proper enum for an algorithm used by Maze
 */
export function getAlgorithmType(name: string): AlgorithmType {
	if (name && typeof name === "string") {
		name = name.trim().toUpperCase();
	} else {
		return AlgorithmType.BinaryTree;
	}

	switch (name.toUpperCase()) {
		case "AB":
		case "ALDOUSBRODER":
			return AlgorithmType.AldousBroder;

		case "HK":
		case "HUNTANDKILL":
			return AlgorithmType.HuntAndKill;

		case "RB":
		case "RECURSIVEBACKTRACKER":
			return AlgorithmType.RecursiveBacktracker;

		case "SW":
		case "SIDEWINDER":
			return AlgorithmType.Sidewinder;

		case "WI":
		case "WILSONS":
			return AlgorithmType.Wilsons;

		case "BT":
		case "BINARYTREE":
		default:
			return AlgorithmType.BinaryTree;
	}
}

export {
	AldousBroder,
	BinaryTree,
	HuntAndKill,
	RecursiveBacktracker,
	Sidewinder,
	Wilsons
};
