import {AldousBroder} from './aldousbroder';
import {BinaryTree} from './binarytree';
import {Grid} from './grid';
import {Sidewinder} from './sidewinder';

export interface Algorithm {
	process(grid: Grid): Grid;
}

export enum AlgorithmType {
	AldousBroder = 'AldousBroder',
	BinaryTree = 'BinaryTree',
	Sidewinder = 'Sidewinder'
}

/**
 * Takes a string, generally from the command line, and determines
 * the requested algorithm.  It will default to BinaryTree if a
 * valid name is not given.
 * @param name {string} the name of the requested algorithm
 * @return {AlgorithmType} the proper enum for an algorithm used by Maze
 */
export function getAlgorithmType(name: string): AlgorithmType {

	if (name && typeof name === 'string') {
		name = name.trim().toUpperCase();
	} else {
		return AlgorithmType.BinaryTree;
	}

	switch (name.toUpperCase()) {

		case 'AB':
		case 'ALDOUSBRODER':
			return AlgorithmType.AldousBroder;

		case 'SW':
		case 'SIDEWINDER':
			return AlgorithmType.Sidewinder;

		case 'BT':
		case 'BINARYTREE':
		default:
			return AlgorithmType.BinaryTree;
	}
}

export {
	AldousBroder,
	BinaryTree,
	Sidewinder
};
