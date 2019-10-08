import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/logo.png';
import SpotList from '../../components/SpotList';
import colors from '../../styles/color';

import {
  Container,
  Logo,
  SpotListContainer,
  Header,
  LogoutButton,
} from './styles';

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  function handleLogout() {
    AsyncStorage.clear();

    console.log(navigation);
    console.tron.log(navigation);

    navigation.navigate('Login');
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} resizeMode="center" />
        <LogoutButton onPress={() => handleLogout()}>
          <Icon name="logout" color={colors.airbnbColor} size={32} />
        </LogoutButton>
      </Header>

      <SpotListContainer>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </SpotListContainer>
    </Container>
  );
}
