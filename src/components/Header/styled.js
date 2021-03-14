import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  align-items: center;
  display:flex;
  justify-content:center;

  a {
    color:#fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;
