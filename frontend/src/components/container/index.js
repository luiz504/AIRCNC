import styled from 'styled-components';
import colors from '../../style/color';
import logo from '../../assets/logo.svg';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    background: ${colors.whiteBase};
    margin-top: 50px;
    border-radius: 5px;
    padding: 30px;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'AirCnC',
})``;
