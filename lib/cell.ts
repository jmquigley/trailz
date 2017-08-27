'use strict';

export class Cell {

	private _links: Map<Cell, boolean> = new Map<Cell, boolean>();

	private _col: number;
	private _row: number;

	private _north: Cell;
	private _south: Cell;
	private _east: Cell;
	private _west: Cell;

	constructor(row: number, col: number) {
		this._row = row;
		this._col = col;
	}

	get col(): number {
		return this._col;
	}

	get links(): Cell[] {
		const out: Cell[] = [];
		for (const cell of this._links.keys()) {
			out.push(cell);
		}
		return out;
	}

	get row(): number {
		return this._row;
	}

	get neighbors(): Cell[] {
		const l: Cell[] = [];

		if (this._north) {
			l.push(this._north);
		}

		if (this._south) {
			l.push(this._south);
		}

		if (this._east) {
			l.push(this._east);
		}

		if (this._west) {
			l.push(this._west);
		}

		return l;
	}

	get north(): Cell {
		return this._north;
	}

	set north(cell: Cell) {
		this._north = cell;
	}

	get south(): Cell {
		return this._south;
	}

	set south(cell: Cell) {
		this._south = cell;
	}

	get east(): Cell {
		return this._east;
	}

	set east(cell: Cell) {
		this._east = cell;
	}

	get west(): Cell {
		return this._west;
	}

	set west(cell: Cell) {
		this._west = cell;
	}

	public link(cell: Cell, bidi: boolean = true): Cell {
		this._links.set(cell, true);

		if (bidi) {
			cell.link(this, false);
		}

		return this;
	}

	public linked(cell: Cell) {
		return this._links.has(cell);
	}

	/**
	 * Clears all links and resets the neighbors
	 */
	public reset() {
		this._links.clear();
		this._north = null;
		this._south = null;
		this._east = null;
		this._west = null;
	}

	public toString(): string {
		return `(${this.row}, ${this.col})`;
	}

	public unlink(cell: Cell, bidi: boolean = true): Cell {
		this._links.delete(cell);

		if (bidi) {
			cell.unlink(this, false);
		}

		return this;
	}

}
