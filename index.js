function inOrder(tree) {
    if (tree.left) inOrder(tree.left);
    console.log(tree.data);
    if (tree.right) inOrder(tree.right);
}

function findOrAdd(root, node) {
    let currentNode = root;
    while (currentNode.data !== node.data) {
        if (currentNode.data < node.data) {
            if (!currentNode.right) {
                currentNode.right = node;
                return
            } else {
                currentNode = currentNode.right;
                continue;
            }
        } else {
            if (!currentNode.left) {
                currentNode.left = node;
                return
            } else {
                currentNode = currentNode.left;
                continue;
            }
        }
    }
    return true;
}

function max(root) {
    let currentNode = root;
    while (currentNode.right) currentNode = currentNode.right;
    return currentNode;
}

function min(root) {
    let currentNode = root;
    while (currentNode.left) currentNode = currentNode.left;
    return currentNode;
}