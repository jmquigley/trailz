import {BinaryTree} from './binarytree';
import {Grid} from './grid';
import {Sidewinder} from './sidewinder';

export interface Algorithm {
	process(grid: Grid): Grid;
}

export enum AlgorithmType {
	BinaryTree = 'BinaryTree',
	Sidewinder = 'Sidewinder'
}

export {
	BinaryTree,
	Sidewinder
};
