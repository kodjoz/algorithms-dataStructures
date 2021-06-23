/* Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid. */

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  // ** if index is < 0,
  if (index < 0) {
    // return -1
    return -1;
  }
  // create counter starts at 0
  let counter = 0;
  // temp storage =this.head
  let temp = this.head;

  // create while loop over ll
  // while temp.next is not null
  while (temp !== null) {
    // if counter deeply equals index
    if (counter === index) {
      // return temp.val;
      return temp.val;
    }
    temp = temp.next;
    // increment counter += 1
    counter++;
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  // if no tail then set new value
  // take what's at the head and move to temp
  const cache = this.head;
  // set this.head to new node
  this.head = new Node(val);
  // set node.next to temp
  this.head.next = cache;

  if (!this.tail) {
    this.tail = this.head;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  // create temp storage for new Node
  let temp = new Node(val);
  // assign this.tail.next to temp
  this.tail.next = temp;
  // assign this.tail to this.tail.next
  this.tail = this.tail.next;

};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) { // index = 1, val = 2
  if (index < 0) return;

  if (index === 0) {
    return this.addAtHead(val);
  }
  // create a new node with the value
  const newNode = new Node(val); // newNode.val = 2, newNode.next = null
  // temp storage for current node, previous node
  // create counter
  let counter = 0; // 0
  let current = this.head; // head.val = 1, head.next = null
  let previous = this.head; // head.val = 1, head.next = null
  // while temp !== null
  while (current !== null) { // current = head, therefore not null
    // if counter === index
    if (counter === index) { // counter = 0, does not equal index
      // newNode.next = current
      // previous.next = newNode
      newNode.next = current;
      previous.next = newNode;

    }
    previous = current; // previous = head
    current = current.next; // current = null
    counter += 1; // counter = 1
  }

  if (index === counter) {
    this.addAtTail(val);
  } else {
    return;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let ll = new MyLinkedList();
// ll.addAtHead(1);
// ll.addAtTail(2);
// ll.addAtHead(3); // expect this.head = 3

// console.log(ll.get(0)); // expect 3
// console.log(ll.get(-1)); // index is less than length of list expect -1 back
// console.log(ll.get(4)); // index is greater than length of list expect -1
// console.log(ll.get(2));

/* Test addAtIndex */
ll.addAtHead(1); // expect this works
ll.addAtHead(2);
ll.addAtIndex(1, 3); // expect new node at 2
console.log(ll.get(1)); // expect val = 2
console.log(ll);

