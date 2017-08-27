<a name="module_Maze"></a>

## Maze
Creates an instance of a Maze structure.  A maze is created within an
M x N grid of cells.  This grid is then given to a processing Algorithm
to carve out passages within the grid.

#### Examples:

```javascript
import {AlgorithmType, Maze} from 'trailz';
const maze = new Maze(10, 10, AlgorithmType.BinaryTree);
console.log(maze.string);
```

