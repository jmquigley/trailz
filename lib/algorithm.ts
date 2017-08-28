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

export {
	AldousBroder,
	BinaryTree,
	Sidewinder
};
