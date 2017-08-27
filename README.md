# trailz

> A library for generating mazes

[![Build Status](https://travis-ci.org/jmquigley/trailz.svg?branch=master)](https://travis-ci.org/jmquigley/trailz)
[![tslint code style](https://img.shields.io/badge/code_style-TSlint-5ed9c7.svg)](https://palantir.github.io/tslint/)
[![Test Runner](https://img.shields.io/badge/testing-ava-blue.svg)](https://github.com/avajs/ava)
[![NPM](https://img.shields.io/npm/v/trailz.svg)](https://www.npmjs.com/package/trailz)
[![Coverage Status](https://coveralls.io/repos/github/jmquigley/trailz/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/trailz?branch=master)

This library is based on the algorithms from the book [Mazes for Programmers: Code Your Own Twisty Little Passages](https://www.amazon.com/Mazes-Programmers-Twisty-Little-Passages/dp/1680500554/ref=sr_1_1?ie=UTF8&qid=1503783819&sr=8-1&keywords=Mazes+for+programmers), by Jamis Buck


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add trailz
```

To build the app and run all tests:
```
$ yarn run all
```

## Overview

To use the library create an instance of the `Maze` class with the size requirements and algorithm type.  It will automatically generate the maze and save it within a grid.  The contents of the maze can be retrieved by using the `.string` or `.array` properties to get the contents.  The `.string` will give an ASCII string representation of the maze.  The `.array` method will return a two dimensional array that contains the representation of that cell.  This representation is 1 of 16 possible representations for a cell (for drawing purposes).

### Usage

```javascript
import {AlgorithmType, Maze} from 'trailz';

const maze = new Maze(10, 10, Algorithm.BinaryTree);
console.log(maze.string);
```

This will create a new instance of a maze using the BinaryTree algorithm.  A new instance of the maze can be rebuilt without creating a new instance with:

```javascript
maze.rebuild(Algorithm.BinaryTree);
```

This will reset the grid and reapply the BinaryTree algorithm to the grid.  The grid can be resized and rebuilt too.

```javascript
maze.resize(5, 5)
```

This will resize the grid to a 5x5 maze and reapply the algorithm.


### API

- [Cell](docs/lib/cell.md)
- [Grid](docs/lib/grid.md)
- [Maze](docs/lib/maze.md)

### Algorithms

- [BinaryTree](docs/lib/binarytree.md)
