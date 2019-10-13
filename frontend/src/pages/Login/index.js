import React, { useState } from 'react';
import Proptypes from 'prop-types';
import api from '../../services/api';

import { Container, Logo } from '../../components/container';
import { GlobalButton } from '../../components/Button';
import { Intro, Form } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      email,
    });
    const { id } = response.data;
    localStorage.setItem('user', id);

    history.push('/dashboard');
  }

  return (
    <Container>
      <Logo />
      <div>
        <Intro>
          Offer <strong>spots</strong> to devs and find <strong>talets</strong>{' '}
          to your company
        </Intro>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            id="email"
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={event => setEmail(event.target.value)}
            autoComplete="off"
          />
          <GlobalButton type="submit">Enter</GlobalButton>
        </Form>
      </div>
    </Container>
  );
}
Login.propTypes = {
  history: Proptypes.shape({
    push: Proptypes.func,
  }).isRequired,
};
