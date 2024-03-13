


const SHA256 = require("crypto-js/sha256");

/**
 * Represents a Hash Table data structure.
 */


class HashTable {
    /**
     * Creates a new HashTable instance.
     * @param {number} limit - The maximum number of key-value pairs the HashTable can hold.
     */
    constructor(limit = 14) {
        this.storage = [];
        this.limit = limit;
    }

    /**
     * Prints the contents of the HashTable.
     */

    printTable() {
        console.log(this.storage);
    }

    /**
     * Sets a key-value pair in the HashTable.
     * @param {string} key - The key to set.
     * @param {*} value - The value to set.
     */

    set(key, value) {
        const index = SHA256(key).toString();
        if (!this.storage[index]) {
            this.storage[index] = [key, value];
        }
    }

    /**
     * Retrieves the value associated with a given key from the HashTable.
     * @param {string} key - The key to retrieve.
     * @returns {*} The value associated with the key, or undefined if the key does not exist.
     */

    get(key) {
        const index = SHA256(key).toString();
        if (this.storage[index]) {
            return this.storage[index];
        } else {
            return undefined;
        }
    }

    /**
     * Removes a key-value pair from the HashTable.
     * @param {string} key - The key to remove.
     */

    remove(key) {
        const index = SHA256(key).toString();
        if (this.storage[index]) {
            delete this.storage[index];
        }
    }
}

//Use cases
/* const hashTable = new HashTable();
hashTable.set("firstName", "John");
hashTable.set("lastName", "Doe");
hashTable.set("age", 35);
hashTable.set("dob", "1/1/1980");

hashTable.printTable(); */

module.exports = HashTable;


//**************************
test
//*************************
const HashTable = require("./app");

describe("HashTable", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it("should set a key-value pair in the HashTable", () => {
    hashTable.set("firstName", "John");
    //espect if the storage has a value ["firstName", "John"]
    expect(hashTable.get("firstName")).toEqual(["firstName", "John"]);

  });

  it("should retrieve the value associated with a given key from the HashTable", () => {
    hashTable.set("lastName", "Doe");
    expect(hashTable.get("lastName")).toEqual(["lastName", "Doe"]);
  });

  it("should return undefined if the key does not exist in the HashTable", () => {
    expect(hashTable.get("age")).toBeUndefined();
  });

  it("should remove a key-value pair from the HashTable", () => {
    hashTable.set("dob", "1/1/1980");
    hashTable.remove("dob");
    expect(hashTable.get("dob")).toBeUndefined();
  });
});
