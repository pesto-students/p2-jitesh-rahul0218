//Validate a Binary Tree
class Node
{
    constructor(data) {
       this.left = null;
       this.right = null;
       this.data = data;
    }
}
 
function binarySearchTree(root, l, r)
{
    
    if (root == null)
        return true;

    
    if (l != null && root.data <= l.data)
        return false;

    if (r != null && root.data >= r.data)
        return false;

    return binarySearchTree(root.left, l, root) &&
        binarySearchTree(root.right, root, r);
}

function newNode(data)
{
    let node = new Node(data);
    return (node);
}
 
let root = newNode(5);
root.left = newNode(1);
root.right = newNode(4);
 root.left.left = newNode(null);
 root.left.right = newNode(null);
 root.right.left = newNode(3);
 root.right.right = newNode(6);

if (binarySearchTree(root,null,null))
    console.log('true');
else
    console.log('false');