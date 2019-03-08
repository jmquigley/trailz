<a name="module_Cell"></a>

## Cell
A single cell reference that is used within a grid.


* [Cell](#module_Cell)
    * [~Cell](#module_Cell..Cell)
        * [.col](#module_Cell..Cell+col) ⇒ <code>number</code>
        * [.links](#module_Cell..Cell+links) ⇒ <code>Array.&lt;Cell&gt;</code>
        * [.linksEmpty](#module_Cell..Cell+linksEmpty) ⇒ <code>boolean</code>
        * [.neighbors](#module_Cell..Cell+neighbors) ⇒ <code>Array.&lt;Cell&gt;</code>
        * [.repr](#module_Cell..Cell+repr) ⇒ <code>number</code>
        * [.row](#module_Cell..Cell+row) ⇒ <code>number</code>
        * [.visitedNeighbors](#module_Cell..Cell+visitedNeighbors) ⇒ <code>Array.&lt;Cell&gt;</code>
        * [.unvisitedNeighbors](#module_Cell..Cell+unvisitedNeighbors) ⇒ <code>Array.&lt;Cell&gt;</code>
        * [.link(cell, bidi)](#module_Cell..Cell+link) ⇒ <code>Cell</code>
        * [.linked(cell)](#module_Cell..Cell+linked) ⇒ <code>boolean</code>
        * [.reset()](#module_Cell..Cell+reset)
        * [.unlink(cell, bidi)](#module_Cell..Cell+unlink) ⇒ <code>Cell</code>

<a name="module_Cell..Cell"></a>

### Cell~Cell
A class that represents a single grid cell.

**Kind**: inner class of [<code>Cell</code>](#module_Cell)  

* [~Cell](#module_Cell..Cell)
    * [.col](#module_Cell..Cell+col) ⇒ <code>number</code>
    * [.links](#module_Cell..Cell+links) ⇒ <code>Array.&lt;Cell&gt;</code>
    * [.linksEmpty](#module_Cell..Cell+linksEmpty) ⇒ <code>boolean</code>
    * [.neighbors](#module_Cell..Cell+neighbors) ⇒ <code>Array.&lt;Cell&gt;</code>
    * [.repr](#module_Cell..Cell+repr) ⇒ <code>number</code>
    * [.row](#module_Cell..Cell+row) ⇒ <code>number</code>
    * [.visitedNeighbors](#module_Cell..Cell+visitedNeighbors) ⇒ <code>Array.&lt;Cell&gt;</code>
    * [.unvisitedNeighbors](#module_Cell..Cell+unvisitedNeighbors) ⇒ <code>Array.&lt;Cell&gt;</code>
    * [.link(cell, bidi)](#module_Cell..Cell+link) ⇒ <code>Cell</code>
    * [.linked(cell)](#module_Cell..Cell+linked) ⇒ <code>boolean</code>
    * [.reset()](#module_Cell..Cell+reset)
    * [.unlink(cell, bidi)](#module_Cell..Cell+unlink) ⇒ <code>Cell</code>

<a name="module_Cell..Cell+col"></a>

#### cell.col ⇒ <code>number</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>number</code> - the column position for this cell within a grid  
<a name="module_Cell..Cell+links"></a>

#### cell.links ⇒ <code>Array.&lt;Cell&gt;</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>Array.&lt;Cell&gt;</code> - the list of cells linked to this one  
<a name="module_Cell..Cell+linksEmpty"></a>

#### cell.linksEmpty ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>boolean</code> - true if there are links from this cell, otherwise false  
<a name="module_Cell..Cell+neighbors"></a>

#### cell.neighbors ⇒ <code>Array.&lt;Cell&gt;</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>Array.&lt;Cell&gt;</code> - the list of valid neighbors for this cell  
<a name="module_Cell..Cell+repr"></a>

#### cell.repr ⇒ <code>number</code>
Each side of a cell (square) in the maze is either *on* or *off* when
carving into the maze.  This function will take the values of each
side and compute a number that represents how the side will be drawn.

e.g.
                                  +---+
15 (decimal) => 1111 (binary) =>  |   |
                                  +---+

                                  +---+
11 (decimal) => 1011 (binary) =>  |
                                  +---+

The bit pattern is made up of "top, right, bottom, left" (TRBL).  In
the first example above, 15 shows that top = 1, right = 1, bottom = 1
and left = 1, for a bit pattern of 1111 and a number 15.

The second patterns shows top = 1, right = 0, bottom = 1, and left = 1
for a bit pattern of 1011 and a number 11.

Each of the patterns represent the 16 possible patterns for a square.

**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>number</code> - a byte representation of the cell for drawing.  
<a name="module_Cell..Cell+row"></a>

#### cell.row ⇒ <code>number</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>number</code> - the row position of this cell within the grid  
<a name="module_Cell..Cell+visitedNeighbors"></a>

#### cell.visitedNeighbors ⇒ <code>Array.&lt;Cell&gt;</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>Array.&lt;Cell&gt;</code> - the list of valid neighbors that have been visited  
<a name="module_Cell..Cell+unvisitedNeighbors"></a>

#### cell.unvisitedNeighbors ⇒ <code>Array.&lt;Cell&gt;</code>
**Kind**: instance property of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>Array.&lt;Cell&gt;</code> - the list of valid neighbors that have not been used  
<a name="module_Cell..Cell+link"></a>

#### cell.link(cell, bidi) ⇒ <code>Cell</code>
Carves a path (links) this cell to the given cell.  This opens the path
between the two cells.

**Kind**: instance method of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>Cell</code> - a reference to self  
**Params**

- cell <code>Cell</code> - the cell to link to from this cell
- bidi <code>boolean</code> <code> = true</code> - determines if the link is bidirectional.  If this
is true, then the link is made from the cell back to this one.  It is
on by default.

<a name="module_Cell..Cell+linked"></a>

#### cell.linked(cell) ⇒ <code>boolean</code>
Determines if the given cell is linked to this one.

**Kind**: instance method of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>boolean</code> - true if the given cell is linked to this one, otherwise
false.  
**Params**

- cell <code>Cell</code> - the input cell to check against this cell

<a name="module_Cell..Cell+reset"></a>

#### cell.reset()
Clears all links and resets the neighbors

**Kind**: instance method of [<code>Cell</code>](#module_Cell..Cell)  
<a name="module_Cell..Cell+unlink"></a>

#### cell.unlink(cell, bidi) ⇒ <code>Cell</code>
Removes the linkage between this cell and the given input cell.

**Kind**: instance method of [<code>Cell</code>](#module_Cell..Cell)  
**Returns**: <code>Cell</code> - a reference to self  
**Params**

- cell <code>Cell</code> - the cell to link to from this cell
- bidi <code>boolean</code> <code> = true</code> - determines if the link is bidirectional.  If this
is true, then the link is made from the cell back to this one.  It is
on by default.

