


const SHA256 = require('crypto-js/sha256');


class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      this.head = head;
      this.tail = null;
    }

    add(data){
        const node = new Node(data)
        if(this.head === null){
            this.head = node;   
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    printAll(){
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
    }

    get(index){
        let count = 0;
        let node = this.head;
        while(node){
            if(count === index){
                return node.data;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    insertAt(index, data){
        if(index === 0){
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
            while(count < index){
                previous = current;
                current = current.next;
                count++;
            }
            const node = new Node(data);
            node.next = current;
            previous.next = node;
        }
    }

    removeAt(index){
        if(index === 0){
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
            while(count < index){
                previous = current;
                if(current.next === null){
                    return null;
                }
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
    }
}

module.exports = LinkedList;








/*   module.exports = LinkedList;
  
  const ll = new LinkedList();
  ll.add(1);
  ll.add(2);
  ll.add(3);
  ll.printAll();
   */

//****************************
test
//****************************

const LinkedList = require("./app");


describe("LinkedList", () => {
  test("LinkedList size method returns the correct count", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);
    linkedList.add(7);
    expect(linkedList.size()).toBe(7);
    expect(linkedList.size()).not.toBe(undefined);
    expect(linkedList.size()).not.toBe(null);
    expect(linkedList.size()).not.toBe(0);
  });
  test("LinkedList get method returns the correct value", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(2)).toBe(3);
    expect(linkedList.get(3)).toBe(null);
  });
  test("LinkedList insertAt method correctly inserts a node", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.insertAt(1, 4);
    expect(linkedList.get(1)).toBe(4);
    linkedList.insertAt(0, 5);
    expect(linkedList.get(0)).toBe(5);
    linkedList.insertAt(5, 6);
    expect(linkedList.get(5)).toBe(6);
  });
  test("LinkedList removeAt method correctly removes a node", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);
    linkedList.removeAt(1);
    expect(linkedList.get(1)).toBe(3);
    linkedList.removeAt(0);
    expect(linkedList.get(0)).toBe(3);
    linkedList.removeAt(4);
    expect(linkedList.get(4)).toBe(null);
    linkedList.removeAt(3);
    expect(linkedList.get(3)).toBe(null);
  })
});
