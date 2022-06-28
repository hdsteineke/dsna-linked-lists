// creating a Node class that has a value of something and a 'next' value = null
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// creating a LinkedList class that has a root value of 'new Node'
class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  
  add(val){
    // sets the current value to the root
    let current  = this.head;
    // checks if current value has a next value
    while (current.next) {
      //if it does have a next value, sets 'current' = 'next' value
      current = current.next;
    }
    //adds the current.next value onto the LinkedList as new Node, where next value is null (??)
    current.next = new Node(val);
  }


  removeTail(){
    let prev = this.head;
    let current = this.head.next;
    if(!current){
      this.head = null;
      return;
    }
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  getList() {
    const listArr = [];
    let current = this.head;
    if(current === null) {
      return listArr;
    }
    while (current.next) {
      listArr.push(current.val);
      current = current.next;
    }
    listArr.push(current.val);
    return listArr;
  }
}

const list = new LinkedList("A");
console.log(list.head);
list.add("B");
console.log(list.getList());
list.add("C");
console.log(list.getList());
list.add("D");
console.log(list.getList());
list.add("E");
console.log(list.getList());

module.exports = { LinkedList };
