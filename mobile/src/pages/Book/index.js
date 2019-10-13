import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { AsyncStorage, Alert } from 'react-native';
import colors from '../../styles/color';

import api from '../../services/api';

import {
  Container,
  BookLabel,
  BookCalendar,
  BookButtonRequest,
  BookButtonCancel,
  BookButtonText,
} from './styles';

export default function Book({ navigation }) {
  const minDate = new Date();

  const [date, setDate] = useState('');
  console.tron.log(date);
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

  function handleDateChange(dateCalendar) {
    setDate(dateCalendar);
  }
  return (
    <Container>
      <BookLabel>Data of Interest *</BookLabel>

      <BookCalendar
        weekdays={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        minDate={minDate}
        swipe
        startFromMonday
        selectedDayColor={colors.airbnbColor}
        onDateChange={handleDateChange}
      />

      <BookButtonRequest onPress={handleSubmit}>
        <BookButtonText>Request reservation</BookButtonText>
      </BookButtonRequest>
      <BookButtonCancel onPress={handleCancel}>
        <BookButtonText>Cancel </BookButtonText>
      </BookButtonCancel>
    </Container>
  );
}

Book.propTypes = {
  navigation: Proptypes.shape({
    getParam: Proptypes.func,
    navigate: Proptypes.func,
  }).isRequired,
};
