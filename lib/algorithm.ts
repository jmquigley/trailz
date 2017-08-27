import {Grid} from './grid';

export interface Algorithm {
	process(grid: Grid): void;
}

export enum AlgorithmType {
	BinaryTree = 'BinaryTree'
}
