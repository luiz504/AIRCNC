import React, { useState } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import colors from '../../styles/color';

import api from '../../services/api';

import {
  Container,
  BookLabel,
  BookInput,
  BookButtonRequest,
  BookButtonCancel,
  BookButtonText,
} from './styles';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(
      `/spots/${id}/bookings`,
      { date },
      {
        headers: { user_id },
      }
    );
    Alert.alert('Reservation request sent.');

    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }
  return (
    <Container>
      <BookLabel>Data of Interest *</BookLabel>
      <BookInput
        placeholder="What data do you want to book?"
        placeholderTextColor={colors.grayLight}
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />
      <BookButtonRequest onPress={handleSubmit}>
        <BookButtonText>Request reservation</BookButtonText>
      </BookButtonRequest>
      <BookButtonCancel onPress={handleCancel}>
        <BookButtonText>Cancel reservation</BookButtonText>
      </BookButtonCancel>
    </Container>
  );
}
