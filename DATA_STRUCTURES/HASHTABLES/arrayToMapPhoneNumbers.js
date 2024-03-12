



/**
 * Creates a map of names to phone numbers from an array of phone numbers.
 * @param {string[]} arr - An array of phone numbers in the format 'Name:Phone'.
 * @returns {Map<string, string>} - A map of names to phone numbers.
 */


/*Create a function thattakes an array of phone numbers like this: [
  'John:123-456-7890',
  'Jane:987-654-3210',
  'Joe:555-555-5555',
];
and returns a map of names to numbers
*/


const phoneNumbers = [
    'John:123-456-7890',
    'Jane:987-654-3210',
    'Joe:555-555-5555',
    ];

const phoneBook = (arr) => {
    let phoneMap = new Map();
    arr.forEach((item) => {
        let [name, number] = item.split(':');
        phoneMap.set(name, number);
    });
    return phoneMap;
}

module.exports = phoneBook;
/*
console.log(phoneBook(phoneNumbers));
*/




//*********************************
test
//*********************************

const phoneBook = require('./app');

describe('phoneBook', () => {
  it('should return a map of names to phone numbers', () => {
    const arr = [
      'John:123-456-7890',
      'Jane:987-654-3210',
      'Joe:555-555-5555',
    ];
    const expected = new Map([
      ['John', '123-456-7890'],
      ['Jane', '987-654-3210'],
      ['Joe', '555-555-5555'],
    ]);
    const result = phoneBook(arr);
    expect(result).toEqual(expected);
  });
});



