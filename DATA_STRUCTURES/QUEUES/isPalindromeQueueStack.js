





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

