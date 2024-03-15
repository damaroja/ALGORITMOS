




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
