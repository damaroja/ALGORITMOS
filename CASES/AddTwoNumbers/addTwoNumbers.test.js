



// Import the List class
const {List, sumListNodes} = require('./app.js')
 

// Create a test suite
describe('sumListNodes function', () => {

  // Create a test case for an empty list
  test('sum of empty lists should return 0', () => {
    const list1 = new List();
    const list2 = new List();
    expect(sumListNodes(list1, list2).list).toEqual([0])
  });

  // Create a test case for a list with one element
  test('sum of a list with one element should return the element', () => {
    const list1 = new List();
    list1.add(1);
    const list2 = new List();
    expect(sumListNodes(list1, list2).list).toEqual([1])

  })

  // Create a test case for two lists with the same elements
  test('sum of two lists with the same elements should return the sum of the elements', () => {
    const list1 = new List();
    list1.add(1);
    list1.add(2);
    const list2 = new List();
    list2.add(1);
    list2.add(2);
    console.log(sumListNodes(list1, list2));
    expect(sumListNodes(list1, list2).list).toEqual([2,4])
  });

  // Create a test case for two lists with different elements
  test('sum of two lists with different elements should return the sum of the elements', () => {
    const list1 = new List();
    list1.add(1);
    list1.add(2);
    const list2 = new List();
    list2.add(3);
    list2.add(4);
    expect(sumListNodes(list1, list2).list).toEqual([4,6]);
  });

  // Create a test case for two lists with different lengths
  test('sum of two lists with different lengths should return the sum of the elements', () => {
    const list1 = new List();
    list1.add(1);
    list1.add(2);
    list1.add(3);
    const list2 = new List();
    list2.add(4);
    list2.add(5);
    list2.add(6);
    list2.add(7);
    expect(sumListNodes(list1, list2).list).toEqual([4,6,9,0]);
  });

  test('sum of two lists with same lengths should return [8,0,7]', () => {
    const list1 = new List();
    list1.add(2);
    list1.add(4);
    list1.add(3);
    const list2 = new List();
    list2.add(5);
    list2.add(6);
    list2.add(4);
    expect(sumListNodes(list1, list2).list).toEqual([8,0,7]);
  });

  test('sum of two lists with 1 lengths should return the sum of the elements', () => {
    const list1 = new List();
    list1.add(0);
    const list2 = new List();
    list2.add(0);
    expect(sumListNodes(list1, list2).list).toEqual([0]);
  });

  test('sum of two lists with different lengths should return the sum of the elements', () => {
    const list1 = new List();
    list1.add(9);
    list1.add(9);
    list1.add(9);
    list1.add(9);
    list1.add(9);
    list1.add(9);
    list1.add(9);
    const list2 = new List();
    list2.add(9);
    list2.add(9);
    list2.add(9);
    list2.add(9);
    expect(sumListNodes(list1, list2).list).toEqual([1,0,0,0,9,9,9,8]);
    console.log();
  });



  // Create a test case for two lists with different lengths

});
