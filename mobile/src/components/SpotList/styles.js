import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../styles/color';

export const SpotContainer = styled.View`
  margin-top: 30px;
`;

export const SpotTitle = styled.Text`
  font-size: 20px;
  color: ${colors.greyDark};
  padding: 0 20px;
  margin-bottom: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
export const SpotsList = styled(FlatList)`
  padding: 0 20px;
`;

export const ListItem = styled.View`
  margin-right: 15px;
`;

export const ListItemImage = styled.Image`
  width: 250;
  height: 120;
  border-radius: 2px;
  background: #ddd;
`;

export const ListItemCompany = styled.Text`
  font-weight: bold;
  font-size: 24;
  color: ${colors.greyDark};
  margin-top: 10px;
`;

export const ListitemPrice = styled.Text`
  font-size: 15px;
  color: ${colors.grayLight};
  margin-top: 5px;
`;

export const ListItemButton = styled.TouchableOpacity`
  height: 32px;
  background: ${colors.airbnbColor};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-top: 15px;
`;

export const ListItemButtonText = styled.Text`
  color: ${colors.whiteBase};
  font-weight: bold;
  font-size: 15px;
`;
