import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import socketio from 'socket.io-client';
import api from '../../services/api';

import colors from '../../style/color';
import { Container, Logo } from '../../components/container';
import { GlobalButton } from '../../components/Button';
import { List, HeaderContainer, LogoutButton, Notification } from './styles';

export default function Dashboard({ history }) {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem('user');

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: { user_id },
      }),
    [user_id]
  );

  useEffect(() => {
    socket.on('booking_request', data => {
      setRequests([...requests, data]);
    });
  }, [requests, socket]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });
      setSpots(response.data);
    }
    loadSpots();
  }, [user_id]);

  async function handleLogout() {
    await localStorage.clear();

    history.push('/');
  }

  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`);

    setRequests(requests.filter(request => request._id !== id));
  }

  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`);

    setRequests(requests.filter(request => request._id !== id));
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <LogoutButton onClick={handleLogout}>
          <MdExitToApp size={30} color={colors.whiteBase} />
        </LogoutButton>
      </HeaderContainer>

      <div>
        <Notification>
          {requests.map(request => (
            <li key={request._id}>
              <p>
                <strong>{request.user.email}</strong> did a request for the spot{' '}
                <strong>{request.spot.company}</strong> for data :{' '}
                {request.date}
              </p>
              <button
                type="button"
                className="accept"
                onClick={() => handleAccept(request._id)}
              >
                Accept
              </button>
              <button
                type="button"
                className="reject"
                onClick={() => handleReject(request._id)}
              >
                Reject
              </button>
            </li>
          ))}
        </Notification>
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

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
