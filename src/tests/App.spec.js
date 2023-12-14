import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../App';

describe('render App', () => {
  test('should render App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('should render Loading...', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    let loginButton = screen.getByText('Loading...');
    expect(loginButton).toBeInTheDocument();
  });
});
