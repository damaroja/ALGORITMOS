


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


//Create a function that reverse a string usin a linked list show later

const reverseStr = (str) => {
    if (str === '') return '';
    if (str.length === 1) return str;
    if (str.length === 2) return str[1] + str[0];
    if (str.length === 3) return str[2] + str[1] + str[0];
    const list = new LinkedList();
    for(let i = 0; i < str.length; i++){
        list.add(str[i]);
    }
    let reversed = '';
    for(let i = list.size() - 1; i >= 0; i--){
        reversed += list.get(i);
    }
    return reversed;
}

module.exports = {reverseStr};


console.log(reverseStr('hello'));
console.log(reverseStr('world'));
console.log(reverseStr('hello world'));


//***************************
test
//***************************



const {reverseStr} = require('./app');


describe('reverseString', () => {
    test('reverseString function exists', () => {
        expect(reverseStr).toBeDefined();
    });
    test('reverseStr is a function', () => {
        expect(typeof reverseStr).toEqual('function');
    });
    test('String reverses', () => {
        expect(reverseStr('')).toEqual('');
    });
    test('String reverses', () => {
        expect(reverseStr('a')).toEqual('a');
    });

    test('String reverses', () => {
        expect(reverseStr('ab')).toEqual('ba');
    });
    test('String reverses', () => {
        expect(reverseStr('abc')).toEqual('cba');
    })
    test('String reverses', () => {
        expect(reverseStr('hello')).toEqual('olleh');
    });
    test('String reverses with uppercase', () => {
        expect(reverseStr('Hello')).toEqual('olleH');
    });
    test('String reverses with numbers', () => {
        expect(reverseStr('12345')).toEqual('54321');
    });
    test('String reverses with special characters', () => {
        expect(reverseStr('!@#$%')).toEqual('%$#@!');
    });
    test('String reverses with spaces', () => {
        expect(reverseStr('hello world')).toEqual('dlrow olleh');
    });
    test('String reverses with spaces and special characters', () => {
        expect(reverseStr('hello world!')).toEqual('!dlrow olleh');
    });
    test('String reverses with spaces and numbers', () => {
        expect(reverseStr('hello world 123')).toEqual('321 dlrow olleh');
    });
    test('String reverses with spaces, numbers and special characters', () => {
        expect(reverseStr('hello world 123!')).toEqual('!321 dlrow olleh');
    });
    test('String reverses with spaces, numbers, special characters and uppercase', () => {
        expect(reverseStr('Hello World 123!')).toEqual('!321 dlroW olleH');
    })
})



