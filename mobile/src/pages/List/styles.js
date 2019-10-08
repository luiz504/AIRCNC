import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 10px;
`;

export const Logo = styled.Image`
  position: absolute;
  height: 32px;
`;
export const LogoutButton = styled.TouchableOpacity`
  margin-right: -90%;
`;

export const SpotListContainer = styled.ScrollView`
  margin: 5px 0;
`;
