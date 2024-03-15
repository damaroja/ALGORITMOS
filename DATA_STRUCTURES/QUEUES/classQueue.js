




/**
 * Represents a Queue data structure.
 */

class Queue {

    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }

    getLength() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.getLength() === 0;
    }

    isFull() {
        return this.getLength() === this.maxSize;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('Queue is full');
            return;
        }
        this.queue[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        const item = this.queue[this.head];
        this.head++;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        return this.queue[this.head];
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        for (let i = this.head; i < this.tail; i++) {
            console.log(this.queue[i]);
        }
    }
}

module.exports = Queue;



//Usage
/* const queue = new Queue();
console.log(queue.isEmpty()); // true
console.log(queue.isFull()); // false
console.log(queue.enqueue(1)); // true
console.log(queue.enqueue(2)); // true
console.log(queue.enqueue(3)); // true
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getLength()); // 2 */


//********************************
test
//********************************

const Queue = require('./app');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should initialize an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.isFull()).toBe(false);
    expect(queue.getLength()).toBe(0);
  });

  it('should enqueue items to the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(false);
    expect(queue.getLength()).toBe(3);
  });

  it('should dequeue items from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getLength()).toBe(0);
  });

  it('should return the first item in the queue without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);
    expect(queue.getLength()).toBe(3);
  });

  it('should print all items in the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const consoleSpy = jest.spyOn(console, 'log');
    queue.print();
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });
});
