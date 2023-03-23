import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoBoard from '../../../app/javascript/components/TodoBoard.js'

test('adds 1 + 2 to equal 3', () => {
  const { getByText } = render(<TodoBoard />);

  expect(getByText('Hi')).toHaveTextContent('Hi')
});
