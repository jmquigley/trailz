<a name="module_Wilsons"></a>

## Wilsons
Implementation of Wilson's maze algorithm from the book
"Mazes for Programmers".  Performs a random walk through the grid.  It
watches for loops that occur during the walk and removes them from the
path that may be generated.  Note that the path is not carved from the
grid initially.  It will keep forming a possible path until it hits a
previously visited cell.   When the loop terminates the path that was
built represents a unique path from the random start to the previously
visited node (with no loops).  This path is carved into the grid.
After a path is carved a new random start location is selected from
locations that have not been visited and the process continues until
there are no more unvisited cells.

#### Examples:

```javascript
import {AlgorithmType, Maze} from 'trailz';

const maze = new Maze(10, 10, AlgorithmType.Wilsons);
console.log(maze.string);
```

