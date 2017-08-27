<a name="module_BinaryTree"></a>

## BinaryTree
Implementation of the BinaryTree maze algorithm from the book
"Mazes for Programmers".  This algorithm works by visiting each cell
in the grid and choosing to carve a passage either north or south.

#### Examples:

```javascript
import {Algorithm, Maze} from 'trailblazer';

const maze = new Maze(10, 10, Algorithm.BinaryTree);
console.log(maze.string);
```

Creates a 10x10 grid and uses the BinaryTree algorithm to carve a
maze.  The `.string` property will return an ascii representation
of the maze.

