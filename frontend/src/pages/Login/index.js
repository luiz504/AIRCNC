import React from 'react';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Offer <strong>spots</strong> to devs and find <strong>talets</strong>{' '}
          to your company
        </p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input id="email" type="email" placeholder="email@email.com" />
          <button type="submit">Enter</button>
        </form>
      </div>
    </Container>
  );
}
