import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors'; //importa tudo como colors de colors
import 'react-toastify/dist/ReactToastfy.css';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: ${colors.primaryDarkColor};
    font-family: sans-serif;
    color: ${colors.primaryColor};
  }

  -ms-hyphenate-limit-chars, border-style, #root {
    height: 100%;
  }

  button {
    background: ${colors.primaryColor};
    border:none;
    color: #fff;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastfy .Toastfy__toast-container .Toastfy__toast--sucsess {
    background: ${colors.successColor}
  }

  body .Toastfy .Toastfy__toast-container .Toastfy__toast--error {
    background: ${colors.successColor}
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
