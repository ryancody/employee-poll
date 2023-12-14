import React from 'react';
import { render, screen } from '@testing-library/react';
import { Results } from '../components/Results';

describe('Results', () => {
  const question = {
    optionOne: { text: 'foo', votes: ['amy', 'farns', 'bender'] },
    optionTwo: { text: 'bar', votes: ['zapp', 'toad'] }
  };

  test('renders option one result correctly', () => {
    render(<Results question={question} />);

    const text = screen.getByText('foo');
    const count = screen.getByText('3');
    const description = screen.getByText('won 60% of votes');

    expect(text).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('renders option two result correctly', () => {
    render(<Results question={question} />);

    const text = screen.getByText('bar');
    const count = screen.getByText('2');
    const description = screen.getByText('won 40% of votes');

    expect(text).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
