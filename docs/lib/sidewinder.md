<a name="module_Sidewinder"></a>

## Sidewinder
Implementation of the Sidewinder maze algorithm from the book
"Mazes for Programmers".  In this algorithm we iterate through
the rows.  With each row we then iterate through each column.
As each column is encountered we decide if we can continue to
move east (or a random chance to stop).  If we can continue, push
that cell into a list of "runs".  When the stop condition occurs
we choose a random value from the list of runs and link it
to its northern neighbor.  Continue this process until all rows
and their respective columns are encountered.

#### Examples:

```javascript
import {AlgorithmType, Maze} from 'trailz';

const maze = new Maze(10, 10, Algorithm.Sidewinder);
console.log(maze.string);
```

