import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

test('Verificando se o botão e o campo email estão funcionando.', async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  await act(async () => {
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  });

  const textEmail = await screen.findByTestId('id-email-user');
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
