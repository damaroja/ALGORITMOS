





/**
 * Represents a Queue data structure.
 */
class Queue {
    /**
     * Creates a new instance of the Queue class.
     */
    constructor() {
        /**
         * The queue array.
         * @type {Array}
         */
        this.queue = [];

        /**
         * The index of the head element in the queue.
         * @type {number}
         */
        this.head = 0;

        /**
         * The index of the tail element in the queue.
         * @type {number}
         */
        this.tail = 0;

        /**
         * The maximum size of the queue.
         * @type {number}
         */
        this.maxSize = 100;
    }

    /**
     * Returns the length of the queue.
     * @returns {number} The length of the queue.
     */
    getLength() {
        return this.tail - this.head;
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.getLength() === 0;
    }

    /**
     * Checks if the queue is full.
     * @returns {boolean} True if the queue is full, false otherwise.
     */
    isFull() {
        return this.getLength() === this.maxSize;
    }

    /**
     * Adds an item to the end of the queue.
     * @param {*} item - The item to enqueue.
     */
    enqueue(item) {
        if (this.isFull()) {
            console.log('Queue is full');
            return;
        }
        this.queue[this.tail] = item;
        this.tail++;
    }

    /**
     * Removes and returns the item at the front of the queue.
     * @returns {*} The item at the front of the queue.
     */
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        const item = this.queue[this.head];
        this.head++;
        return item;
    }

    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {*} The item at the front of the queue.
     */
    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        return this.queue[this.head];
    }

    /**
     * Prints all the items in the queue.
     */
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


/**
 * Represents a Stack data structure.
 */
class Stack {
    /**
     * Creates a new instance of the Stack class.
     */
    constructor() {
        /**
         * The stack array.
         * @type {Array}
         */
        this.stack = [];

        /**
         * The maximum size of the stack.
         * @type {number}
         */
        this.maxSize = 100;

        /**
         * The index of the top element in the stack.
         * @type {number}
         */
        this.top = -1;
    }

    /**
     * Checks if the stack is full.
     * @returns {boolean} True if the stack is full, false otherwise.
     */
    isFull() {
        return this.top === this.maxSize - 1;
    }

    /**
     * Pushes a value onto the stack.
     * @param {*} value - The value to push onto the stack.
     */
    push(value) {
        if (this.isFull()) {
            console.log("Stack Overflow");
            return;
        }
        this.top++;
        this.stack[this.top] = value;
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.top === -1;
    }

    /**
     * Pops the top element from the stack.
     * @returns {*} The popped element.
     */
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return;
        }
        this.top--;
        return this.stack.pop();
    }

    /**
     * Returns the top element of the stack without removing it.
     * @returns {*} The top element of the stack.
     */
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
            return;
        }
        return this.stack[this.top];
    }

    /**
     * Prints all the elements in the stack.
     */
    printStack() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.stack[i]);
        }
    }

    /**
     * Returns the size of the stack.
     * @returns {number} The size of the stack.
     */
    stackSize() {
        return this.top + 1;
    }

    /**
     * Clears the stack.
     */
    clearStack() {
        this.stack = [];
        this.top = -1;
    }

    /**
     * Searches for a value in the stack.
     * @param {*} value - The value to search for.
     * @returns {string} The result of the search.
     */
    search(value) {
        for (let i = 0; i <= this.top; i++) {
            if (this.stack[i] === value) {
                return `Value found at index ${i}`;
            }
        }
        return "Value not found";
    }

    /**
     * Returns the stack array.
     * @returns {Array} The stack array.
     */
    getStack() {
        return this.stack;
    }
}


/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str) => {
    const stack = new Stack();
    const queue = new Queue();

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        queue.enqueue(str[i]);
    }

    for (let i = 0; i < str.length; i++) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
    }

    return true;
}

module.exports = {Queue, Stack, isPalindrome};


//use Cases
/* console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('level')); // true
console.log(isPalindrome('world')); // false
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('noon')); // true
console.log(isPalindrome('civic')); // true
console.log(isPalindrome('stats')); // true
console.log(isPalindrome('radar')); // true */


//*****************************
test
//*****************************

const {Stack, Queue, isPalindrome} = require('./app');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack.clearStack();
  });

  test('push should add a value to the stack', () => {
    stack.push(1);
    expect(stack.stackSize()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  test('pop should remove and return the top element from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.stackSize()).toBe(2);
  });

  test('peek should return the top element from the stack without removing it', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.stackSize()).toBe(3);
  });

  test('isEmpty should return true if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('isFull should return true if the stack is full', () => {
    expect(stack.isFull()).toBe(false);
    for (let i = 0; i < stack.maxSize; i++) {
      stack.push(i);
    }
    expect(stack.isFull()).toBe(true);
  });

  test('printStack should print all the elements in the stack', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.printStack();
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    consoleSpy.mockRestore();
  });

  test('stackSize should return the size of the stack', () => {
    expect(stack.stackSize()).toBe(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.stackSize()).toBe(3);
  });

  test('clearStack should clear the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.clearStack();
    expect(stack.stackSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test('search should return the index of the value if found in the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.search(2)).toBe('Value found at index 1');
  });

  test('search should return "Value not found" if the value is not in the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.search(4)).toBe('Value not found');
  });

  test('getStack should return the stack array', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.getStack()).toEqual([1, 2, 3]);
  });
});


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

describe('isPalindrome', () => {
  test('should return true for a palindrome string', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  test('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should return true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('z')).toBe(true);
  });
});

