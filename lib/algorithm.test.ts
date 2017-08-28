'use strict';

import test from 'ava';
import {AlgorithmType, getAlgorithmType} from '../index';

test('Test retrieval of the algorithm type', t => {

	t.is(getAlgorithmType(null), AlgorithmType.BinaryTree);
	t.is(getAlgorithmType('     '), AlgorithmType.BinaryTree);
	t.is(getAlgorithmType(''), AlgorithmType.BinaryTree);

	t.is(getAlgorithmType('BinaryTree'), AlgorithmType.BinaryTree);
	t.is(getAlgorithmType('binarytree'), AlgorithmType.BinaryTree);
	t.is(getAlgorithmType('BINARYTREE'), AlgorithmType.BinaryTree);
	t.is(getAlgorithmType('BT'), AlgorithmType.BinaryTree);
	t.is(getAlgorithmType('bt'), AlgorithmType.BinaryTree);

	t.is(getAlgorithmType('AldousBroder'), AlgorithmType.AldousBroder);
	t.is(getAlgorithmType('aldousbroder'), AlgorithmType.AldousBroder);
	t.is(getAlgorithmType('ALDOUSBRODER'), AlgorithmType.AldousBroder);
	t.is(getAlgorithmType('AB'), AlgorithmType.AldousBroder);
	t.is(getAlgorithmType('ab'), AlgorithmType.AldousBroder);

	t.is(getAlgorithmType('Sidewinder'), AlgorithmType.Sidewinder);
	t.is(getAlgorithmType('sidewinder'), AlgorithmType.Sidewinder);
	t.is(getAlgorithmType('SIDEWINDER'), AlgorithmType.Sidewinder);
	t.is(getAlgorithmType('SW'), AlgorithmType.Sidewinder);
	t.is(getAlgorithmType('sw'), AlgorithmType.Sidewinder);
});
