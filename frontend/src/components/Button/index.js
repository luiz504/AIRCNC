import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../style/color';

export const GlobalButton = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${colors.aibnb};
  color: ${colors.whiteBase};

  &:hover {
    background: ${darken(0.02, colors.aibnbcontrast)};
  }
`;
