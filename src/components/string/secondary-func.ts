import { ElementStates } from '../../types/element-states';

export const stateCircle = (
  index: number,
  currIndex: number,
  arr: Array<string | number>
) => {
  let arrLength = arr.length - 1;
  if (currIndex < index || currIndex > arrLength - index) {
    return ElementStates.Modified;
  }
  if (currIndex === index || currIndex === arrLength - index) {
    return ElementStates.Changing;
  }
  return ElementStates.Default;
};

// для unit теста, проверка алгоритма разворота строки
export const reverseStringForTest = (stroke: string) => {
  const lettersArr = stroke.split('');
  let end = lettersArr.length - 1;
  let mid = Math.floor(lettersArr.length / 2);

  for (let i = 0; i < mid; i++) {
    [lettersArr[i], lettersArr[end - i]] = [lettersArr[end - i], lettersArr[i]];
  }

  return lettersArr;
};
