import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import { Container, Logo } from '../../components/container';
import { GlobalButton, GlobalButtonGrey } from '../../components/Button';
import { Form } from './styles';

export default function NewSpot({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data, { headers: { user_id } });

    history.push('/dashboard');
  }

  return (
    <Container>
      <Logo />

      <div>
        <Form onSubmit={handleSubmit}>
          <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
          >
            <input
              type="file"
              onChange={event => setThumbnail(event.target.files[0])}
            />
            <img src={camera} alt="Select img" />
          </label>

          <label htmlFor="company">Company *</label>
          <input
            type="text"
            id="company"
            placeholder="Company Name"
            value={company}
            onChange={event => setCompany(event.target.value)}
          />
          <label htmlFor="techs">
            Technologies * <span>(comma separated)</span>
          </label>
          <input
            type="text"
            id="techs"
            placeholder="What Techs using?"
            value={techs}
            onChange={event => setTechs(event.target.value)}
          />
          <label htmlFor="price">
            Daily price * <span> Blank = Free</span>
          </label>
          <input
            type="text"
            id="price"
            placeholder="Daily price"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
          <GlobalButton>Register</GlobalButton>
          <GlobalButtonGrey
            type="button"
            onClick={() => history.push('/dashboard')}
          >
            Cancel
          </GlobalButtonGrey>
        </Form>
      </div>
    </Container>
  );
}
NewSpot.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
