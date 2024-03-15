



//Create an Map structure Class to store the data


//sha256    
const SHA256 = require('crypto-js/sha256');


/**
 * Represents a custom map data structure.
 * @class
 */
class myMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * Add data to the map.
     * @param {string} key - The key to be added.
     * @param {any} value - The value to be associated with the key.
     */
    addData(key, value) {
        const hash = SHA256(key).toString();
        this.map.set(hash, value);
    }

    /**
     * Get data from the map.
     * @param {string} key - The key to retrieve the data.
     * @returns {any} The value associated with the key.
     */
    getData(key) {
        const hash = SHA256(key).toString();
        return this.map.get(hash);
    }

    /**
     * Delete data from the map.
     * @param {string} key - The key to delete the data.
     */
    deleteData(key) {
        const hash = SHA256(key).toString();
        this.map.delete(hash);
    }

    /**
     * Get the size of the map.
     * @returns {number} The size of the map.
     */
    size() {
        return this.map.size;
    }

    /**
     * Check if the map is empty.
     * @returns {boolean} True if the map is empty, false otherwise.
     */
    isEmpty() {
        return this.map.size === 0;
    }

    /**
     * Clear the map.
     */
    clear() {
        this.map.clear();
    }

    /**
     * Prints the key-value pairs of the map.
     */
    print() {
        for (let [key, value] of this.map) {
            console.log(key + ' : ' + value);
        }
    }

    /**
     * Check if the map has a key.
     * @param {string} key - The key to check.
     * @returns {boolean} True if the map has the key, false otherwise.
     */
    has(key) {
        const hash = SHA256(key).toString();
        return this.map.has(hash);
    }
}



/**
 * Counts the frequency of a word in a string using a HashTable.
 * @param {string} str - The input string.
 * @param {string} word - The word to count the frequency of.
 * @returns {number} The count of the specified word.
 */

function wordCount(str, word) {
    const words = str.toLowerCase().split(/\W+/)

    const map = new myMap();
    words.forEach((w) => {
        if (map.has(w)) {
            const count = map.getData(w);
            map.addData(w, count + 1);
        } else {
            map.addData(w, 1);
        }
    });
    if(!map.getData(word.toLowerCase()))  return 0;
    return map.getData(word.toLowerCase());
}

module.exports = {
    myMap,
    wordCount
};




//**************************
test
//**************************




const { myMap, wordCount} = require('./app');

describe('myMap', () => {
  let map;

  beforeEach(() => {
    map = new myMap();
  });

  it('should add data to the map', () => {
    map.addData('1', 'John');
    expect(map.size()).toBe(1);
  });

  it('should get data from the map', () => {
    map.addData('1', 'John');
    expect(map.getData('1')).toBe('John');
  });

  it('should delete data from the map', () => {
    map.addData('1', 'John');
    map.deleteData('1');
    expect(map.size()).toBe(0);
  });

  it('should return the size of the map', () => {
    map.addData('1', 'John');
    map.addData('2', 'Doe');
    expect(map.size()).toBe(2);
  });

  it('should check if the map is empty', () => {
    expect(map.isEmpty()).toBe(true);
    map.addData('1', 'John');
    expect(map.isEmpty()).toBe(false);
  });

  it('should clear the map', () => {
    map.addData('1', 'John');
    map.addData('2', 'Doe');
    map.clear();
    expect(map.size()).toBe(0);
  });

  it('should check if the map has a key', () => {
    map.addData('1', 'John');
    expect(map.has('1')).toBe(true);
    expect(map.has('2')).toBe(false);
  });
});

describe('wordCount', () => {
  it('should count the occurrences of a word in a string', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper nisl. Sed auctor, mauris id lacinia aliquet, nunc nisl tincidunt nunc, eu bibendum nunc nisl eu nunc. Sed euismod, nisl ac lacinia tristique, nunc nisl tincidunt nunc, eu bibendum nunc nisl eu nunc.';
    const word = 'nunc';
    const result = wordCount(str, word);
    expect(result).toBe(8);
  });

  it('should return 0 if the word is not found in the string', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper nisl. Sed auctor, mauris id lacinia aliquet, nunc nisl tincidunt nunc, eu bibendum nunc nisl eu nunc. Sed euismod, nisl ac lacinia tristique, nunc nisl tincidunt nunc, eu bibendum nunc nisl eu nunc.';
    const word = 'nonexistent';
    const result = wordCount(str, word);
    expect(result).toBe(0);
  });

  it('should count the occurrences of a word regardless of case sensitivity', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper nisl. Sed auctor, mauris id lacinia aliquet, nunc nisl tincidunt nunc, eu bibendum nunc nisl eu nunc. Sed euismod, nisl ac lacinia tristique, nunc nisl tincidunt nunc, eu bibendum nunc nisl eu nunc.';
    const word = 'NUNC';
    const result = wordCount(str, word);
    expect(result).toBe(8);
  });
});

