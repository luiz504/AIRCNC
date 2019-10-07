import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import logo from '../../assets/logo.png';
import SpotList from '../../components/SpotList';

import { Container, Logo, SpotListContainer } from './styles';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <Container>
      <Logo source={logo} resizeMode="center" />
      <SpotListContainer>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </SpotListContainer>
    </Container>
  );
}
