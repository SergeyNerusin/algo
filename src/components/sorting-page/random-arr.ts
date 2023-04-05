import { ElementStates } from '../../types/element-states';

export interface IArrayNumbers {
  value: number;
  state: ElementStates;
}

export type TSorting = 'increase' | 'descending' | 'start';

const MIN = 3;
const MAX = 17;

export const getArrayNumbers = (): IArrayNumbers[] => {
  const array = [];
  const len = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  for (let i = 0; i <= len; i++) {
    array.push({
      value: Math.round(Math.random() * 100),
      state: ElementStates.Default,
    });
  }
  return array;
};

export const swap = (
  arr: IArrayNumbers[] | number[],
  firstIndex: number,
  secondIndex: number
): void => {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

// для unit тестирования функций сортировки выбором и пызырьком
export const selectionSortForTest = (
  array: Array<number>,
  direction: TSorting = 'increase'
) => {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (
        direction === 'increase'
          ? array[j] < array[maxIndex]
          : array[j] > array[maxIndex]
      ) {
        maxIndex = j;
      }
    }
    swap(array, maxIndex, i);
  }
  return array;
};

export const bubbleSortForTest = (
  array: Array<number>,
  direction: TSorting = 'increase'
): Array<number> => {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      const left = array[j];
      const right = array[j + 1];
      if (direction === 'increase' ? left > right : left < right) {
        array[j] = right;
        array[j + 1] = left;
      }
    }
  }
  return array;
};
