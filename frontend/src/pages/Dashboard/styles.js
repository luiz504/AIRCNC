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
export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const LogoutButton = styled.button`
  margin-left: 90%;
  background: none;
  border: none;
  &:hover {
    color: ;
  }
`;

export const Notification = styled.ul`
  list-style: none;
  margin-bottom: 15px;

  > li {
    font-size: 16px;
    line-height: 24px;
  }

  li button {
    margin-right: 10px;
    border: 0px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 10px;
    background: none;
  }

  li button.accept {
    color: ${colors.greenButtonAcept};
  }

  li button.reject {
    color: ${colors.redButtonReject};
  }
`;
