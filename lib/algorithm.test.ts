"use strict";

const assert = require("power-assert");

import {AlgorithmType, getAlgorithmType} from "../index";

test("Test retrieval of the algorithm type", () => {
	assert(getAlgorithmType(null) === AlgorithmType.BinaryTree);
	assert(getAlgorithmType("     ") === AlgorithmType.BinaryTree);
	assert(getAlgorithmType("") === AlgorithmType.BinaryTree);

	assert(getAlgorithmType("BinaryTree") === AlgorithmType.BinaryTree);
	assert(getAlgorithmType("binarytree") === AlgorithmType.BinaryTree);
	assert(getAlgorithmType("BINARYTREE") === AlgorithmType.BinaryTree);
	assert(getAlgorithmType("BT") === AlgorithmType.BinaryTree);
	assert(getAlgorithmType("bt") === AlgorithmType.BinaryTree);

	assert(getAlgorithmType("AldousBroder") === AlgorithmType.AldousBroder);
	assert(getAlgorithmType("aldousbroder") === AlgorithmType.AldousBroder);
	assert(getAlgorithmType("ALDOUSBRODER") === AlgorithmType.AldousBroder);
	assert(getAlgorithmType("AB") === AlgorithmType.AldousBroder);
	assert(getAlgorithmType("ab") === AlgorithmType.AldousBroder);

	assert(getAlgorithmType("HuntAndKill") === AlgorithmType.HuntAndKill);
	assert(getAlgorithmType("huntandkill") === AlgorithmType.HuntAndKill);
	assert(getAlgorithmType("HUNTANDKILL") === AlgorithmType.HuntAndKill);
	assert(getAlgorithmType("HK") === AlgorithmType.HuntAndKill);
	assert(getAlgorithmType("hk") === AlgorithmType.HuntAndKill);

	assert(
		getAlgorithmType("RecursiveBacktracker") ===
			AlgorithmType.RecursiveBacktracker
	);
	assert(
		getAlgorithmType("recursivebacktracker") ===
			AlgorithmType.RecursiveBacktracker
	);
	assert(
		getAlgorithmType("RECURSIVEBACKTRACKER") ===
			AlgorithmType.RecursiveBacktracker
	);
	assert(getAlgorithmType("RB") === AlgorithmType.RecursiveBacktracker);
	assert(getAlgorithmType("rb") === AlgorithmType.RecursiveBacktracker);

	assert(getAlgorithmType("Sidewinder") === AlgorithmType.Sidewinder);
	assert(getAlgorithmType("sidewinder") === AlgorithmType.Sidewinder);
	assert(getAlgorithmType("SIDEWINDER") === AlgorithmType.Sidewinder);
	assert(getAlgorithmType("SW") === AlgorithmType.Sidewinder);
	assert(getAlgorithmType("sw") === AlgorithmType.Sidewinder);

	assert(getAlgorithmType("Wilsons") === AlgorithmType.Wilsons);
	assert(getAlgorithmType("wilsons") === AlgorithmType.Wilsons);
	assert(getAlgorithmType("WILSONS") === AlgorithmType.Wilsons);
	assert(getAlgorithmType("WI") === AlgorithmType.Wilsons);
	assert(getAlgorithmType("wi") === AlgorithmType.Wilsons);
});
