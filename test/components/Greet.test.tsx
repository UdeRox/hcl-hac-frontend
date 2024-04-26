import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import Greet from '../../src/components/Greet';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../src/store';

describe('Greet', () => {
  it('should render Hello with name', () => {
    render(<Greet name="udeshika" />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello udeshika/i);
  });

  it('should render Login Button', () => {
    render(
      <Provider store={store}>
        <Greet />
      </Provider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
