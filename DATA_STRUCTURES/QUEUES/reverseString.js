





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
        return true
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





//create a function that reverse a string using a queue

const reverseString = (str) => {
    let queue = new Queue();
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        queue.enqueue(str[i]);
    }
    while (queue.getLength() > 0) {
        reversedString += queue.dequeue();
    }
    return reversedString;
}

console.log(reverseString('hello'))

module.exports = { Queue, reverseString }


//********************
test
//********************


const { reverseString, Queue} = require('./app');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should enqueue items correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.getLength()).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  test('should dequeue items correctly', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const item1 = queue.dequeue();
    const item2 = queue.dequeue();

    expect(item1).toBe(1);
    expect(item2).toBe(2);
    expect(queue.getLength()).toBe(1);
    expect(queue.peek()).toBe(3);
  });

  test('should return the correct length of the queue', () => {
    expect(queue.getLength()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.getLength()).toBe(3);

    queue.dequeue();

    expect(queue.getLength()).toBe(2);
  });

  test('should check if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
  });

  test('should check if the queue is full', () => {
    expect(queue.isFull()).toBe(false);

    for (let i = 0; i < 100; i++) {
      queue.enqueue(i);
    }

    expect(queue.isFull()).toBe(true);
  });

  test('should print the items in the queue', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.print();

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);

    consoleSpy.mockRestore();
  });
});

describe('reverseString', () => {
  test('should reverse a string using a queue', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
  });
});
