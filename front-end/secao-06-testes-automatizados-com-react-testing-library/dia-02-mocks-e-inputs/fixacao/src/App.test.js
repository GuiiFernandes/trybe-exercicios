// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());
const joke0 = 'Whiteboards ... are remarkable.';

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: joke0,
    status: 200,
  };

  // Outra forma de mock do fetch:
  global.fetch = jest.fn(async () => ({
    json: async () => joke,
  }));

  render(<App />);
  const renderedJoke = await screen.findByText(joke0);
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});

it('test a jokes button', async () => {
  const jokes = [
    {
      id: '7h3oGtrOfxc',
      joke: joke0,
      status: 200,
    },
    {
      id: '521sdfsegs1',
      joke: 'A piada do pinto de 3 patas ... correu.',
      status: 200,
    },
  ];

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValueOnce(jokes[0])
      .mockResolvedValueOnce(jokes[1]),
  });

  render(<App />);
  const renderedJoke = await screen.findByText(joke0);
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  const btnNewJoke = screen.getByRole('button', { name: 'New Joke' });
  await act(async () => { userEvent.click(btnNewJoke); });
  const newRenderedJoke = await screen.findByText('A piada do pinto de 3 patas ... correu.');
  expect(newRenderedJoke).toBeInTheDocument();
  expect(screen.queryByText(joke0)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
