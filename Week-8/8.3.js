//Binary Tree Level Order Traversal
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

    function printLevelOrder() {
        var queue = [];
        queue.push(root);
        while (queue.length != 0) {
         
            var tempNode = queue.shift();
            console.log(tempNode.data + " ");
 
            
            if (tempNode.left != null) {
                queue.push(tempNode.left);
            }
 
        
            if (tempNode.right != null) {
                queue.push(tempNode.right);
            }
        }
    }
 
     
        root = new Node(3);
        root.left = new Node(9);
        root.right = new Node(20);
        root.left.left = new Node(null);
        root.left.right = new Node(null);
        root.right.left = new Node(15);
        root.right.right = new Node(7);
 
       console.log("Level order traversal");
       printLevelOrder();