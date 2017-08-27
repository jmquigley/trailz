'use strict';

import test from 'ava';
import {Cell} from '../index';

test('Test creation of a single Cell container', t => {
	const cell = new Cell(0, 0);

	t.truthy(cell);
	t.is(cell.row, 0);
	t.is(cell.col, 0);

	const cell2 = new Cell(1, 1);

	t.truthy(cell2);
	t.is(cell2.row, 1);
	t.is(cell2.row, 1);

	cell.link(cell2);

	t.is(cell.links.length, 1);
	t.is(cell2.links.length, 1);

	t.true(cell.linked(cell2));
	t.true(cell2.linked(cell));

	cell.unlink(cell2);

	t.is(cell.links.length, 0);
	t.is(cell2.links.length, 0);

	t.false(cell.linked(cell2));
	t.false(cell2.linked(cell));
});
