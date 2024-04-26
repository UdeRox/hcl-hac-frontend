import { render, screen } from '@testing-library/react';
import {it, expect, describe} from 'vitest'
import Greet from '../../src/components/Greet';
import React from 'react';

describe('Greet', () => {
  it('should render Hello with name', () => {
    render(<Greet name="udeshika" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello udeshika/i);
  });

  it('should render Login Button', () => {
    render(<Greet />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
