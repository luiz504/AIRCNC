import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import socketio from 'socket.io-client';
import api from '../../services/api';

import colors from '../../style/color';
import { Container, Logo } from '../../components/container';
import { GlobalButton } from '../../components/Button';
import { List, HeaderContainer, LogoutButton } from './styles';

export default function Dashboard({ history }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const socket = socketio(process.env.API_URL);
  }, []);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');

      const response = await api.get('/dashboard', {
        headers: { user_id },
      });

      setSpots(response.data);
    }
    loadSpots();
  }, [
    /* filters */
  ]);

  async function handleLogout() {
    await localStorage.clear();

    history.push('/');
  }
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <LogoutButton onClick={handleLogout}>
          <MdExitToApp size={60} color={colors.whiteBase} />
        </LogoutButton>
      </HeaderContainer>

      <div>
        <List>
          {spots.map(spot => (
            <li key={spot.id}>
              <header
                style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
              />
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/day` : 'Free'}</span>
            </li>
          ))}
        </List>
        <Link to="/new">
          <GlobalButton>Registry new spot</GlobalButton>
        </Link>
      </div>
    </Container>
  );
}
