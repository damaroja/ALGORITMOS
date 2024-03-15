




/**
 * Represents a stack data structure.
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

module.exports = Stack;




//**********************************
test
//**********************************


const Stack = require('./app');

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

