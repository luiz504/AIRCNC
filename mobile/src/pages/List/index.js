import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import Proptypes from 'prop-types';

import { AsyncStorage, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/logo.png';
import colors from '../../styles/color';

import SpotList from '../../components/SpotList';

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
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.25.124:3333', {
        query: { user_id },
      });
      socket.on('booking_response', booking => {
        Alert.alert(
          `Your reservation on ${booking.spot.company} on ${booking.date} was ${
            booking.approved ? 'approved' : 'rejected'
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  function handleLogout() {
    AsyncStorage.clear();

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
List.propTypes = {
  navigation: Proptypes.shape({
    navigate: Proptypes.func,
  }).isRequired,
};
