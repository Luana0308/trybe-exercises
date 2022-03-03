import React from 'react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './redurcers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

test('a click in a button should increment the value of clicks', () => {
renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

  expect(screen.getByText('5')).toBeInTheDocument();
});

test('teste o valor inicial do reducer', () => {
renderWithRedux(<App />, { initialState: { clickReducer: {counter: 0}}});

expect(screen.getByText('0')).toBeInTheDocument();
});

test('counter igual a 10', () => {
renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

  expect(screen.getByText('10')).toBeInTheDocument();

  const buttonAdicionar = screen.queryByText('Clique aqui');
  userEvent.click(buttonAdicionar);
  expect(screen.getByText('11')).toBeInTheDocument();
});