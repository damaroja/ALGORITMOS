




const { hashTag, verifyString } = require('./app');

test('verifyString should throw an error for undefined string', () => {
  expect(() => {
    verifyString(undefined);
  }).toThrow('Undefined string');
});

test('verifyString should throw an error for empty string', () => {
  expect(verifyString('')).toBe(false);
});

test('verifyString should throw an error for non-string input', () => {
  expect(() => {
    verifyString(123);
  }).toThrow('Not a string');
});


test('hashTag should return a valid hash tag for a given string', () => {
  const str = 'hello world';
  const result = hashTag(str);
  expect(result).toBe('#HelloWorld');
});

test('hashTag should return false if the input string is undefined', () => {
    expect(() => hashTag(undefined)).toThrow('Undefined string');  
})

test('hashTag should return false if the input string is a number', () => {
    expect(() => hashTag(23423423)).toThrow('Not a string');  
})
test('hashTag should return false if the input string is an array', () => {
    expect(() => hashTag([])).toThrow('Not a string');  
})
test('hashTag should return false if the input string is a object', () => {
    expect(() => hashTag({})).toThrow('Not a string');  
})

test('hashTag should return false if the resulting hash tag is longer than 140 characters', () => {
  const str = 'this is a very long string that will exceed the character limit for a hash tag hjsgahs sag hjsagdahsghajsghjsahjsagd hdjsaghjsagh jaghjsaga sgahdhgashjdhahsaj gsgsajgdhjagdajhgdahjsg daghjsagdhjagasa saghjsagdhjsadhjagdgsahjgdhjagdhjsagdsahj';
  const result = hashTag(str);
  expect(result).toBe(false);
});
