/*

In the file nodes.json there is an example of a data structure that has a value of type integer, but also a left and right variable that could be a object of the same type. If you need more test data you can get as much as you want from this source

Calculate the sum of the full structure.
Report the deepest level of the structure.
Report the number of nodes.
{
  value: 67, // Level 1
  left: { value: 765, left: null, right: null }, // Level 2
  right: {
    value: 167, // Level 2
    left: {
      value: 564, // Level 3
      left: null,
      right: { value: 379, left: null, right: null } // Level 4
    },
    right: null
  }
}
// --> 
Sum = 1942
Deepest level = 4
Nodes = 5

*/

const testNode = {
    value: 67, // Level 1
    left: { value: 765, left: null, right: null }, // Level 2
    right: {
      value: 167, // Level 2
      left: {
        value: 564, // Level 3
        left: null,
        right: { value: 379, left: null, right: null } // Level 4
      },
      right: null
    }
  }

function structureData(node, depth) {
    if (node == null) {
        return { sum: 0, deepestLevel: depth, nodes: 0};
    }

    let leftValues;
    let rightValues;
    let deepestLevelReached = depth;

    return {
        sum,
        deepestLevel,
        Nodes,
    };
}
