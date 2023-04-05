import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ElementStates } from '../../../../types/element-states';

import { Circle } from '../circle';

describe('testing Circle component', () => {
  test('circle without text render correctly', () => {
    const button = TestRenderer.create(<Circle letter='' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle with text render correctly', () => {
    const button = TestRenderer.create(<Circle letter='123' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle render correctly with "head"', () => {
    const button = TestRenderer.create(
      <Circle letter='' head='head' />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle render correctly with "head" and letter', () => {
    const button = TestRenderer.create(
      <Circle letter='123' head='head' />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle render correctly with "tail"', () => {
    const button = TestRenderer.create(
      <Circle letter='' tail='tail' />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle render correctly with "tail" and letter', () => {
    const button = TestRenderer.create(
      <Circle letter='123' tail='tail' />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle with index render correctly', () => {
    const button = TestRenderer.create(<Circle index={0} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle with isSmall render correctly', () => {
    const button = TestRenderer.create(<Circle isSmall={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle with state chainging render correctly', () => {
    const button = TestRenderer.create(
      <Circle state={ElementStates.Changing} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('circle with state modified render correctly', () => {
    const button = TestRenderer.create(
      <Circle state={ElementStates.Modified} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
