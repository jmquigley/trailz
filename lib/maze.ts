'use strict';

import {Algorithm, AlgorithmType} from './algorithm';
import {BinaryTree} from './binarytree';
import {Grid} from './grid';

interface Algorithms {
	[key: string]: Algorithm;
}

export class Maze {

	private _algorithms: Algorithms = {
		[AlgorithmType.BinaryTree]: new BinaryTree()
	};

	private _grid: Grid;

	constructor(rows: number, cols: number, algorithm: AlgorithmType = AlgorithmType.BinaryTree) {
		this._grid = new Grid(rows, cols);
		this._algorithms[algorithm].process(this._grid);
	}

	get string(): string {
		return this._grid.toString();
	}

	public rebuild(algorithm: AlgorithmType) {
		this._grid.reset();
		this._algorithms[algorithm].process(this._grid);
	}
}
