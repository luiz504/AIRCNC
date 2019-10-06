import styled from 'styled-components';
import colors from '../../style/color';

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;
  }

  header {
    width: 100%;
    height: 120px;
    background-size: cover;
    border-radius: 4px;
  }

  strong {
    margin-top: 10px;
    font-size: 24px;
    color: ${colors.greyMedium};
  }
  span {
    font-size: 15px;
    color: ${colors.greyLight};
  }
`;
