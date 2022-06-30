class SLLNode
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

function createSLL(arr)
{
  let head = new SLLNode(arr[0]);
  let curr = head;
  for(let i = 1; i < arr.length; ++i)
  {
    curr.next = new SLLNode(arr[i]);
    curr = curr.next;
  }

  return head;
}

function traverseSLL(head)
{
  let curr = head; 
  while(curr !== null)
  {
    console.log(curr.value);
    curr = curr.next;
  }
}

function rotateListKTimes(head, k)
{
  let tail = head, n = 1;
  while(tail.next)
  {
    n++;
    tail = tail.next;
  }

  k %= n;
  if(k === 0)
    return head;

  tail.next = head;
  let steps = n-k;
  let newTail = tail;
  while(steps--)
  {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
}

let head1 = createSLL([2, 4, 7, 8, 9]);

head1 = rotateListKTimes(head1, 2);
traverseSLL(head1);

