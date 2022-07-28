/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  const visited = new Map();

  function cloneNode(node) {
    const root = new Node(node.val, []);

    if (node.neighbors) {
      for (const neighbor of node.neighbors) {
        if (visited.has(root.val)) {
          root.neighbors.push(visited.get(root.val));
        } else {
          root.neighbors.push(cloneNode(neighbor));
          visited.set(root.val, root);
        }
      }
    }

    return root;
  }

  return cloneNode(node);
}

const map = new Map();
