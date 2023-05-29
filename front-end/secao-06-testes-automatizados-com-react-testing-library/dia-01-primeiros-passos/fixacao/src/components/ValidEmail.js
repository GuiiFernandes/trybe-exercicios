import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

function ValidEmail(props) {
  const { email } = props;
  const validEmail = verifyEmail(email);
  return (
    <div>
      {
        email && (
          <>
            <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
            <h3
              style={ { color: validEmail ? 'green' : 'red' } }
            >
              {(validEmail ? 'Email Válido' : 'Email Inválido')}
            </h3>
          </>
        )
      }
    </div>
  );
}

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
