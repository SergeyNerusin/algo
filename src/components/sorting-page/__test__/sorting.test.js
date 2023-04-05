import { selectionSortForTest, bubbleSortForTest } from '../random-arr';

describe('checking the sorting function "selectionSortForTest"', () => {
  test('get empty array', () => {
    expect(selectionSortForTest([])).toEqual([]);
  });

  test('get one element of array', () => {
    expect(selectionSortForTest([1])).toEqual([1]);
  });

  test('get elements of array method increase', () => {
    expect(selectionSortForTest([5, 1, 10, 4, 2])).toEqual([1, 2, 4, 5, 10]);
  });

  test('get elements of array method descending', () => {
    expect(selectionSortForTest([5, 1, 10, 4, 2], 'descending')).toEqual([
      10, 5, 4, 2, 1,
    ]);
  });
});

describe('checking the sorting function "bubbleSortForTest"', () => {
  test('get empty array', () => {
    expect(bubbleSortForTest([])).toEqual([]);
  });

  test('get one element of array', () => {
    expect(bubbleSortForTest([1])).toEqual([1]);
  });

  test('get elements of array method increase', () => {
    expect(bubbleSortForTest([5, 1, 10, 4, 2])).toEqual([1, 2, 4, 5, 10]);
  });

  test('get elements of array method descending', () => {
    expect(bubbleSortForTest([5, 1, 10, 4, 2], 'descending')).toEqual([
      10, 5, 4, 2, 1,
    ]);
  });
});
