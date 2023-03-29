import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Direction } from '../../../../types/direction';

import { Button } from '../button';

describe('testing Button component', () => {
  test('button with text render correctly', () => {
    const button = TestRenderer.create(<Button text='Развернуть' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('button without text render correctly', () => {
    const button = TestRenderer.create(<Button text='' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('loader in the button is displayed correctly', () => {
    const button = TestRenderer.create(<Button isLoader={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('button with sortig by increase render correctly', () => {
    const button = TestRenderer.create(
      <Button sorting={Direction.Ascending} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('button with sortig by descending render correctly', () => {
    const button = TestRenderer.create(
      <Button sorting={Direction.Descending} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('button with size "small" render correctly', () => {
    const button = TestRenderer.create(<Button linkedList='small' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('button with size "big" render correctly', () => {
    const button = TestRenderer.create(<Button linkedList='big' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('callback function should be called on button click', () => {
    const handleClick = jest.fn();
    render(<Button text='Callback' onClick={() => handleClick()} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
