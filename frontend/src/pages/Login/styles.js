import styled from 'styled-components';
import colors from '../../style/color';

export const Intro = styled.p`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

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
`;
