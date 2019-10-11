import styled from 'styled-components';

import colors from '../../style/color';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label#thumbnail {
    margin-bottom: 20px;
    border: 1px dashed ${colors.whiteBorder};
    background-size: cover;
    height: 160px;
    border-radius: 2px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    > input {
      display: none;
    }
  }

  label#thumbnail.has-thumbnail {
    border: 0;
  }
  label#thumbnail.has-thumbnail img {
    display: none;
  }

  label {
    font-size: 14px;
    color: ${colors.greyMedium};
    font-weight: bold;
    margin-bottom: 8px;
  }

  span {
    font-weight: normal;
    color: ${colors.greyLight};
    font-size: 12px;
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
