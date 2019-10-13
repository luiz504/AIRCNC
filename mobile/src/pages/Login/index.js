import React, { useState, useEffect } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../styles/color';

import logo from '../../assets/logo.png';

import {
  Container,
  Logo,
  EmailContainer,
  EmailText,
  EmailInput,
  FindButtom,
  FindButtomText,
} from './styles';

import api from '../../services/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('List');
      }
    });
  });

  async function handleSubmit() {
    if (email === '') {
      Alert.alert('', 'E-mail is required');
      return;
    }

    const response = await api.post('/sessions', {
      email,
    });
    const { id } = response.data;
    await AsyncStorage.setItem('user', id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
  }

  return (
    <Container behavior="padding">
      <Logo source={logo} />

      <EmailContainer>
        <EmailText> Your E-Mail *</EmailText>
        <EmailInput
          placeholder="email@email.com"
          placeholderTextColor={colors.grayLight}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <EmailText> Tecnologias *</EmailText>
        <EmailInput
          placeholder="Technologies of interest"
          placeholderTextColor={colors.grayLight}
          autoCapitalize="words"
          value={techs}
          onChangeText={setTechs}
        />

        <FindButtom onPress={() => handleSubmit()}>
          <FindButtomText> Find Spots</FindButtomText>
        </FindButtom>
      </EmailContainer>
    </Container>
  );
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
