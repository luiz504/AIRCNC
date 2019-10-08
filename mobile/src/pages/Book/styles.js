import styled from 'styled-components/native';
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
export const BookInput = styled.TextInput`
  border: 1px solid ${colors.whiteBorder};
  padding: 0 20px;
  font-size: 16px;
  color: ${colors.greyDark};
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`;

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
