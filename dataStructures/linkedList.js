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

// The Linked List
class LinkedList {
  constructor(head = null, size = 0) {
    this.head = head;
    this.size = size;
  }

  // Methods

  // Insert at first node
  insert(value) {
    // if something is in the head already this pushes it to next
    this.head = new Node(value, this.head);
    this.size += 1;
  }
  // Insert last node
  insertLast(value) {
    const node = new Node(value);
    let current;
    // if list is empty then this node is now the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size += 1;
  }

  // Insert at index
  insertAt(value, index) {
    // bad index
    if (index > 0 && index > this.size) {
      return;
    }

    // if index is zero
    if (index === 0) {
      return this.head = new Node(value, this.head);
    }

    const node = new Node(value);
    let current, previous;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      // move to temp storage
      previous = current;
      // increment
      count += 1;
      // current is now the next node
      current = current.next;
    }

    node.next = current;
    previous.next = node;
  }
  // Get from index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.value);
      }

      count += 1;
      current = current.next;
    }

    return null;
  }

  // Remove from index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.next
      }

      previous.next = current.next;
    }

    this.size -= 1;
  }

  // Clear list
  clear() {
    // erases list
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printData() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

// const nodeOne = new Node(100);
// const nodeTwo = new Node(200);

const linkedList = new LinkedList();
linkedList.insert(100);
linkedList.insert(200);
linkedList.insert(300);
linkedList.insertLast(400);
//linkedList.printData();
//linkedList.insertAt(500, 8);
//console.log(linkedList);
//linkedList.printData();
//linkedList.getAt(2)
linkedList.clear();