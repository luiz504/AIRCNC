import styled from 'styled-components/native';
import colors from '../../styles/color';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const EmailContainer = styled.View`
  align-self: stretch;
  padding: 0 30px;
  margin-top: 30px;
`;

export const EmailText = styled.Text`
  font-weight: bold;
  color: ${colors.greyDark};
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const EmailInput = styled.TextInput`
  border: 1px solid ${colors.whiteBorder};
  padding: 0 20px;
  font-size: 16px;
  color: ${colors.greyDark};
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`;

export const FindButtom = styled.TouchableOpacity`
  height: 42px;
  background: ${colors.airbnbColor};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;
export const FindButtomText = styled.Text`
  color: ${colors.whiteBase};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;
// export const FindButtom,  FindButtomText, = styled.View``;
