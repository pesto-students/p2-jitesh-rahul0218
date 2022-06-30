class SLLNode
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

let head = null;

function createSLL(arr)
{
  head = new SLLNode(arr[0]);
  let curr = head;
  for(let i = 1; i < arr.length; ++i)
  {
    curr.next = new SLLNode(arr[i]);
    curr = curr.next;
  }
}

function traverseSLL()
{
  let curr = head; 
  while(curr !== null)
  {
    console.log(curr.value);
    curr = curr.next;
  }
}

function reverseList()
{
  let prev = null, curr = head, after = null;
  while(curr.next !== null)
  {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;  //curr = curr.next
  }
  curr.next = prev;
  head = curr;
}

createSLL([1,2,3,4,5,6]);
reverseList();
traverseSLL();  