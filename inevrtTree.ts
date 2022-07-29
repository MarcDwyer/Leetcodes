function invertTree(root: TreeNode | null): TreeNode | null {
  let node = root;

  function invert(node: TreeNode | null) {
    if (!node) return;

    const left = node.left;

    const right = node.right;

    node.left = right;
    node.right = left;

    invert(node.left);
    invert(node.right);
  }

  invert(root);
  return root;
}
