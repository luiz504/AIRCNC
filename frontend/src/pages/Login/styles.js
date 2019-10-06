import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../style/color';

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

    > p {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      flex-direction: column;
    }
    label {
      font-size: 14px;
      color: ${colors.greymedium};
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid ${colors.whiteBorder};
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
  }
  button {
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
  }
`;
