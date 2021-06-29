// Create a singly linked list (SLL)

// Strictly - an SLL has only three properties, head, tail, length
// Each element in the list is a node with properties value and next
// The only way to traverse a linked list is to travel through each node

// node
// stores a piece of data and a reference to next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment counter
    this.length += 1;
    return this;
  }

  pop() {
    // if there are no nodes in the list return undefined
    if (!this.head) {
      return undefined;
    }
    // two variables
    let previous = this.head;
    let current = previous
    // loop through list until you reach the tail but track what the 2nd to last item is
    while (current.next) {
      previous = current;
      current = current.next;
    }
    // set next property of 2nd to last item to null
    previous.next = null;
    // set tail to be 2nd to last item
    this.tail = previous;
    // reduce length by 1
    this.length -= 1;
    // return value of node removed
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    // edge case - if array is empty do nothing
    if (!this.head) {
      return undefined;
    }
    // temp storage
    const currentHead = this.head.val
    // reassign this.head
    this.head = this.head.next;
    // return shifted value
    this.length -= 1;
    if (this.length === 0) { // without this the tail will not be empty which could cause weird behavior
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val); // store new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; // next property is old head value, need to control for case where list is empty
      this.head = newNode; // head is now new node
    }
    this.length += 1; // increment list
    return this;
  }

  get(index) {
    if (!this.head) {
      return null;
    }
    // edge case # 2
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;

    while (current) {
      if (counter === index) {
        return current;
      } else {
        current = current.next;
        counter += 1;
      }
    }
    return undefined;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // if index < 0 or > length return false
    if (index > this.length || index < 0) return false;
    // if index is same length insert at end
    if (index === this.length) return !!this.push(val); // doubly negates the return value
    // if index is 0 unshift
    if (index === 0) return !!this.unshift(val);
    // call get at index - 1
    let previous = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = previous.next
    previous.next = newNode;
    this.length += 1;
    return true;
    // set next is new node
    // connect new node to old next node
    // increment length, return true
  }

  remove(index) {
    // if index is less than zero or greater than lenght return undefined
    if (index >= this.length || index < 0) return undefined;
    // if index is same as length - 1, pop
    if (index === this.length - 1) return this.pop();
    // if index is 0, shift
    if (index === 0) return this.shift();
    // otherwise get node at index - 1
    let temp = this.get(index - 1);
    let removed = temp.next;
    // update next property
    temp.next = removed.next;
    // reduce length
    this.length -= 1;
    // return removed node
    return removed.val;
  }
}

let list = new SinglyLinkedList();
// list.push('Hello'); // Expect one node added to list
// list.push('Goodbye');
// console.log(list.pop());
// list.push(999);
// // console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);

// /* Test 3 - Shift */
// list.push('Alpha');
// list.push('Bravo');
// console.log(list); // expect list length two
// console.log(list.shift()); // Expect 'Alpha' returned
// console.log(list); // expect list length 1, this.head = Bravo
// console.log(list.shift()); // expect 'Bravo'
// console.log(list); // expect tail to be null

// /* Test 4 - Unshift */
// list.push('bravo');
// list.unshift('alpha');
// console.log(list); // expect nodes alpha, bravo

// /* Test 5 - Unshift */
// list.pop();
// list.pop();
// list.unshift('charlie');
// console.log(list);

/* Test 6 - Get (at index) */
// list.push('alpha');
// list.push('bravo');
// list.push('charlie');
// console.log(list.get(2)); // expect charlie
// list.pop();
// list.pop();
// list.pop();
// list.push('delta');
// console.log(list.get(0)); //expect delta

/* Test 7 - Set */
// list.push('echo');
// list.push('foxtrot');
// list.push('golf');
// console.log(list.get(2)); // expect golf
// console.log(list.set(2, 'hotel')); // expect true
// console.log(list.set(3, 'india')); // expect false

// /* Test 8 - Insert */
// list.push('india');
// list.push('juliet');
// list.push('kilo')
// console.log(list.insert(1, 'lima'));
// console.log(list);
// list.insert(0, 'mike');
// list.insert(5, 'november');
// console.log(list);

/* Test 9 - Remove */
list.push('oscar'); // 4
list.push('papa'); // 3
list.push('quebec'); // 2
list.push('romeo'); // 1
console.log(list.remove(1)); // expect papa
console.log(list.remove(0)); // expect oscar
console.log(list.remove(1)); // expect romeo