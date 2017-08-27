<a name="Grid"></a>

## Grid
This class represents an array of cells by row and column

**Kind**: global class  

* [Grid](#Grid)
    * [.cols](#Grid+cols) ⇒ <code>number</code>
    * [.random](#Grid+random) ⇒ <code>Cell</code>
    * [.repr](#Grid+repr) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.rows](#Grid+rows) ⇒ <code>number</code>
    * [.size](#Grid+size) ⇒ <code>number</code>
    * [.at(row, col)](#Grid+at) ⇒ <code>Cell</code>
    * [.reset()](#Grid+reset)

<a name="Grid+cols"></a>

### grid.cols ⇒ <code>number</code>
**Kind**: instance property of [<code>Grid</code>](#Grid)  
**Returns**: <code>number</code> - the total number of columns in the grid container  
<a name="Grid+random"></a>

### grid.random ⇒ <code>Cell</code>
**Kind**: instance property of [<code>Grid</code>](#Grid)  
**Returns**: <code>Cell</code> - a random cell location from the grid  
<a name="Grid+repr"></a>

### grid.repr ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
**Kind**: instance property of [<code>Grid</code>](#Grid)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - a byte representation of the current maze.  
<a name="Grid+rows"></a>

### grid.rows ⇒ <code>number</code>
**Kind**: instance property of [<code>Grid</code>](#Grid)  
**Returns**: <code>number</code> - the total number of rows in the grid  
<a name="Grid+size"></a>

### grid.size ⇒ <code>number</code>
**Kind**: instance property of [<code>Grid</code>](#Grid)  
**Returns**: <code>number</code> - the total size of the grid container  
<a name="Grid+at"></a>

### grid.at(row, col) ⇒ <code>Cell</code>
Retrieves a cell at the requested location.  If the location is outside
of the grid, then null is returned.

**Kind**: instance method of [<code>Grid</code>](#Grid)  
**Returns**: <code>Cell</code> - the cell within the grid location.  If outside the range
then null.  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>number</code> | the row in the grid |
| col | <code>number</code> | the column in the grid |

<a name="Grid+reset"></a>

### grid.reset()
Resets the internal state of the grid so that the algorithm can be
reapplied.

**Kind**: instance method of [<code>Grid</code>](#Grid)  
