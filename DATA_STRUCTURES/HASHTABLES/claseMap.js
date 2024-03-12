



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

    //add data to the map
    addData(key, value) {
        const hash = SHA256(key).toString();
        this.map.set(hash, value);
    }

    //get data from the map
    getData(key) {
        const hash = SHA256(key).toString();
        return this.map.get(hash);
    }

    //delete data from the map
    deleteData(key) {
        const hash = SHA256(key).toString();
        this.map.delete(hash);
    }

    //get the size of the map
    size() {
        return this.map.size;
    }

    //check if the map is empty
    isEmpty() {
        return this.map.size === 0;
    }

    //clear the map
    clear() {
        this.map.clear();
    }

    //print the map
    print() {
        for (let [key, value] of this.map) {
            console.log(key + ' : ' + value);
        }
    }
    //check if the map has a key
    has(key) {
        const hash = SHA256(key).toString();
        return this.map.has(hash);
    }
}

module.exports = myMap;

//create a new map

//--------------------------------------------------------------
//Uso de la clase myMap
//--------------------------------------------------------------


/* let map = new myMap();
map.addData('1', 'John');
map.addData('2', 'Doe');
map.addData('3', 'Smith');
map.addData('4', 'Alex');
map.addData('5', 'Tom');


console.log('Size of the map: ' + map.size());

map.print();

console.log('Get data with key 1: ' + map.getData('1')); */



//***************************************
test
//***************************************

const myMap = require('./app');

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






