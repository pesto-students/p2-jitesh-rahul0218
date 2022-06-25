var head; 
    class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
      function push(new_data) {
        var new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }
  
    function detectLoop(h) {
        var s = new Set();
        while (h != null) {
            
            if (s.has(h))
                return true;
            s.add(h);
  
            h = h.next;
        }
  
        return false;
    }
  
        push(1);
        push(3);
        push(8);
        push(4);
        
  head.next.next.next = head;
  
        if (detectLoop(head))
            console.log("Loop found");
        else
            console.log("No Loop");
  