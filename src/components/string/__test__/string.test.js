import { reverseStringForTest } from '../secondary-func';

describe('testing the string unfolding algorithm', () => {
  test('reverse string with even number of characters', () => {
    expect(reverseStringForTest('abcd')).toEqual(['d', 'c', 'b', 'a']);
  });

  test('reverse string with odd number of characters', () => {
    expect(reverseStringForTest('abc')).toEqual(['c', 'b', 'a']);
  });

  test('function works if the string consists of one character', () => {
    expect(reverseStringForTest('a')).toEqual(['a']);
  });

  test('function works if string is empty', () => {
    expect(reverseStringForTest('')).toEqual([]);
  });
});
