/**
 * A single cell reference that is used within a grid.
 *
 * @module Cell
 */

"use strict";

/**
 * A class that represents a single grid cell.
 */
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

	/**
	 * @return {number} the column position for this cell within a grid
	 */
	get col(): number {
		return this._col;
	}

	/**
	 * @return {Cell[]} the list of cells linked to this one
	 */
	get links(): Cell[] {
		const out: Cell[] = [];
		for (const cell of this._links.keys()) {
			out.push(cell);
		}
		return out;
	}

	/**
	 * @return {boolean} true if there are links from this cell, otherwise false
	 */
	get linksEmpty(): boolean {
		return this._links.size === 0;
	}

	/**
	 * @return {Cell[]} the list of valid neighbors for this cell
	 */
	get neighbors(): Cell[] {
		const l: Cell[] = [];

		if (this._north) l.push(this._north);
		if (this._south) l.push(this._south);
		if (this._east) l.push(this._east);
		if (this._west) l.push(this._west);

		return l;
	}

	/**
	 * Each side of a cell (square) in the maze is either *on* or *off* when
	 * carving into the maze.  This function will take the values of each
	 * side and compute a number that represents how the side will be drawn.
	 *
	 * e.g.
	 *                                   +---+
	 * 15 (decimal) => 1111 (binary) =>  |   |
	 *                                   +---+
	 *
	 *                                   +---+
	 * 11 (decimal) => 1011 (binary) =>  |
	 *                                   +---+
	 *
	 * The bit pattern is made up of "top, right, bottom, left" (TRBL).  In
	 * the first example above, 15 shows that top = 1, right = 1, bottom = 1
	 * and left = 1, for a bit pattern of 1111 and a number 15.
	 *
	 * The second patterns shows top = 1, right = 0, bottom = 1, and left = 1
	 * for a bit pattern of 1011 and a number 11.
	 *
	 * Each of the patterns represent the 16 possible patterns for a square.
	 *
	 * @return {number} a byte representation of the cell for drawing.
	 */
	get repr(): number {
		let val: number = 15; // Default all 4 sides "on"

		if (this.linked(this._north)) val &= 7; // turn off "top"
		if (this.linked(this.east)) val &= 11; // turn off "right"
		if (this.linked(this.south)) val &= 13; // turn off "bottom"
		if (this.linked(this.west)) val &= 14; // turn off "left"

		return val;
	}

	/**
	 * @return {number} the row position of this cell within the grid
	 */
	get row(): number {
		return this._row;
	}

	/**
	 * @return {Cell[]} the list of valid neighbors that have been visited
	 */
	get visitedNeighbors(): Cell[] {
		const l: Cell[] = [];

		if (this._north && !this._north.linksEmpty) l.push(this._north);
		if (this._south && !this._south.linksEmpty) l.push(this._south);
		if (this._east && !this._east.linksEmpty) l.push(this._east);
		if (this._west && !this._west.linksEmpty) l.push(this._west);

		return l;
	}

	/**
	 * @return {Cell[]} the list of valid neighbors that have not been used
	 */
	get unvisitedNeighbors(): Cell[] {
		const l: Cell[] = [];

		if (this._north && this._north.linksEmpty) l.push(this._north);
		if (this._south && this._south.linksEmpty) l.push(this._south);
		if (this._east && this._east.linksEmpty) l.push(this._east);
		if (this._west && this._west.linksEmpty) l.push(this._west);

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

	/**
	 * Carves a path (links) this cell to the given cell.  This opens the path
	 * between the two cells.
	 * @param cell {Cell} the cell to link to from this cell
	 * @param bidi {boolean} determines if the link is bidirectional.  If this
	 * is true, then the link is made from the cell back to this one.  It is
	 * on by default.
	 * @return {Cell} a reference to self
	 */
	public link(cell: Cell, bidi: boolean = true): Cell {
		this._links.set(cell, true);

		if (bidi) {
			cell.link(this, false);
		}

		return this;
	}

	/**
	 * Determines if the given cell is linked to this one.
	 * @param cell {Cell} the input cell to check against this cell
	 * @return {boolean} true if the given cell is linked to this one, otherwise
	 * false.
	 */
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

	/**
	 * Removes the linkage between this cell and the given input cell.
	 * @param cell {Cell} the cell to link to from this cell
	 * @param bidi {boolean} determines if the link is bidirectional.  If this
	 * is true, then the link is made from the cell back to this one.  It is
	 * on by default.
	 * @return {Cell} a reference to self
	 */
	public unlink(cell: Cell, bidi: boolean = true): Cell {
		this._links.delete(cell);

		if (bidi) {
			cell.unlink(this, false);
		}

		return this;
	}
}
