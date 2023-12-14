import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Leaderboard } from '../components/Leaderboard';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { _getUsers, _getQuestions } from '../utils/_DATA';

const mockStore = configureMockStore();

describe('Leaderboard', () => {
  const users = _getUsers();
  const questions = _getQuestions();

  test('should sort by posted when clicked', () => {
    const initialState = {
      users,
      questions
    };
    const store = mockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard users={users} questions={questions} />
        </Provider>
      </MemoryRouter>
    );

    const sortByAnsweredButton = screen.getByText('Sort by Answered');
    fireEvent.click(sortByAnsweredButton);

    const sortByPostedButton = screen.getByText('Sort by Posted');
    expect(sortByPostedButton).toBeInTheDocument();
    expect(screen.queryByText('Sort by Answered')).not.toBeInTheDocument();    
  });
});
