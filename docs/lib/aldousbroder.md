<a name="module_AldousBroder"></a>

## AldousBroder
Implements the AldousBroder maze algorithm from the book
"Mazes for Programmers".  This algorithm works by randomly choosing cells
in the grid.  If that cell has never visited an neighbor (carved a path)
then it randomly samples its neighbor list and uses that neighbor to
select a path.  This removes many of the biases that exist within the
BinaryTree or Sidewinder algorithms because all mazes have a chance of
occurring.

#### Examples:

```javascript
import {AlgorithmType, Maze} from 'trailz';

const maze = new Maze(10, 10, AlgorithmType.AldousBroder);
console.log(maze.string);
```

