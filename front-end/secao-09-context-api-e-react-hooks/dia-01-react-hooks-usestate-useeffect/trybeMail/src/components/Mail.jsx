import React, { useEffect, useState } from 'react';
import { HiOutlineMail, HiOutlineMailOpen } from 'react-icons/hi';

import emailsList from '../data';

export default function Mail() {
  const [emails, setEmails] = useState(emailsList);

  const toogleStatus = (id) => {
    setEmails(
      emails.map((email) => {
        if (email.id === id) return { ...email, status: email.status ? 0 : 1 };
        return email;
      }),
    );
  };

  const allToogleStatus = (newStatus) => {
    setEmails(
      emails.map((email) => ({ ...email, status: newStatus })),
    );
  };

  useEffect(() => {
    const allReaded = emails.every(({ status }) => status === 1);
    // eslint-disable-next-line no-alert
    if (allReaded) alert('Todos os e-mail foram lidos!');
    // o certo seria global.alert, mas está global is not defined
  }, [emails]);

  return (
    <main>
      <section className="btns">
        <button
          type="button"
          onClick={ () => allToogleStatus(1) }
        >
          <HiOutlineMailOpen />
          Marcar todos como lidos
        </button>
        <button
          onClick={ () => allToogleStatus(0) }
          type="button"
        >
          <HiOutlineMail />
          Marcar todos como não lidos
        </button>
      </section>
      <ul>
        {emails.map(({ id, title, status }) => (
          <li key={ id }>
            <button
              onClick={ () => toogleStatus(id) }
              type="button"
            >
              { status ? (
                <HiOutlineMailOpen />
              ) : (
                <HiOutlineMail />
              )}
            </button>
            <span style={ { fontWeight: status ? '400' : '700' } }>{title}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
