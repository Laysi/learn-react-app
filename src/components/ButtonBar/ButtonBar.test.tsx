import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonBar from './ButtonBar';

describe('<ButtonBar />', () => {
  test('it should mount', () => {
    render(<ButtonBar />);
    
    const buttonBar = screen.getByTestId('ButtonBar');

    expect(buttonBar).toBeInTheDocument();
  });
});