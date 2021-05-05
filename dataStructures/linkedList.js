// Linked List class

// Dynamic data structure

// How does it work?
/* Store new item at nextFree pointer,
Identify new item's place in the list
If new start:
  Set new item's pointer to previous starting value
  Reset starting point to new item
Else
  Temporarily store preceding item's pointer
  Set preceding item's pointer to point to the new item
  Set new item's pointer to preceding item's old pointer
End
  Increment nextFree pointer
*/

/* LinkedList node has a value and a reference to the next value in the list */

// Simple node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const nodeOne = new Node(100);
const nodeTwo = new Node(200);

console.log(nodeOne);
console.log(nodeTwo);