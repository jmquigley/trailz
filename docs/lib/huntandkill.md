<a name="module_HuntAndKill"></a>

## HuntAndKill
Implementation of the Hunt and Kill maze algorithm from the book
"Mazes for Programmers".  Performs a random walk selecting the next node
based on whether that next neighbor node has no linkage.  All neighbors with
no linkage are randomly sampled for one of those neighbors.  The selected
neighbor is linked (carved into).  This is the random walk phase.  When a
node doesn't have an unlinked neighbor, it effectively "paints itself into a
corner".  This leads to the hunt phase.  The algorithm then iterates
through all nodes and selects the first unvisited node that has a
neighbor that was previously visited.  That node becomes the current node.
The algorithm carves a path from that new current node into that neighbor.
The setting of that current cell marks the end of the hunt phase and the
random walk stage begins again.  This process continues until there is
no new current node to select and the main loop terminates.

#### Examples:

```javascript
import {AlgorithmType, Maze} from 'trailz';

const maze = new Maze(10, 10, AlgorithmType.HuntAndKill);
console.log(maze.string);
```

