//Maximum Depth of Binary Tree
class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
     let root;
     function maximumDepth(node)
    {
        if (node == null)
            return 0;
        else
        {
            let leftDepth = maximumDepth(node.left);
            let rightDepth = maximumDepth(node.right);
   
            if (leftDepth > rightDepth)
                return (leftDepth + 1);
             else
                return (rightDepth + 1);
        }
    }    
        root = new Node(3);
        root.left = new Node(9);
        root.right = new Node(20);
        root.left.left = new Node(null);
        root.left.right = new Node(null);
        root.right.left = new Node(15);
        root.right.right = new Node(7);
   
        console.log("Height of tree is : " +
                                      maximumDepth(root));