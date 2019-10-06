import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Logo } from '../../components/container';
import { GlobalButton } from '../../components/Button';
import { List } from './styles';

export default function Home() {
  const [spots, setSpots] = useState([]);

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
  return (
    <Container>
      <Logo />
      <div>
        <List>
          {spots.map(spot => (
            <li key={spot.id}>
              <header
                style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
              />
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price} per day` : 'Free'}</span>
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
