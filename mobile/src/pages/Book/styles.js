import styled from 'styled-components/native';
import CalendarPicker from 'react-native-calendar-picker';
import colors from '../../styles/color';

export const Container = styled.View`
  flex: 1;
  margin: 30px;
  margin-top: 50px;
`;

export const BookLabel = styled.Text`
  font-weight: bold;
  color: ${colors.greyDark};
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const BookCalendar = styled(CalendarPicker)``;

export const BookButtonRequest = styled.TouchableOpacity`
  height: 42px;
  background: ${colors.airbnbColor};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;
export const BookButtonCancel = styled.TouchableOpacity`
  height: 42px;
  background: ${colors.greybuttom};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-top: 10px;
`;
export const BookButtonText = styled.Text`
  color: ${colors.whiteBase};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;
