import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import IndexImageWeb from '../../assets/index-image.jpg';
import IndexImageMobile from '../../assets/index-image-mobile.jpg';
import DesktopFooter from '../../assets/desktop-footer.jpg';
import MobileFooter from '../../assets/mobile-footer.jpg';

const IndexImage = isMobile ? IndexImageMobile : IndexImageWeb;
const FooterImage = isMobile ? MobileFooter : DesktopFooter;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const IndexDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url(${IndexImage}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const IndexHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;

  img {
    height: 32px;
  }

  li {
    display: flex;
    flex-direction: row;

    ul {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const IndexHeaderMobile = styled.div`
  display: flex;
  padding: 32px;

  button {
    border: none;
    background: transparent;
  }
`;

export const DivMenuOpen = styled.div`
  background: #29abe2;
  position: absolute;

  li {
    display: flex;
    flex-direction: column;

    ul {
      margin-right: 20px;
      padding: 16px;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const IndexTitle = styled.div`
  margin: auto;
  color: #fff;
  font-family: 'HelveticaNeue-UltraLight', Helvetica;

  h1 {
    font-size: 56px;
  }
`;

export const RegisterForm = styled.div`
  display: flex;
  flex: 1;
  background: #29abe2;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  color: #fff;

  p {
    margin-top: 16px;
    width: 100%;
  }
`;

export const InputDiv = styled.div`
  margin-top: 8px;
  border-bottom: 2px solid;

  input {
    border: none;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #fff;
    }
  }
`;

export const ButtonDiv = styled.div`
  padding: 24px;

  button {
    padding: 8px;
    border: 2px solid;
    border-radius: 4px;
    background: #012d51;
    color: #29abe2;
    font-family: Helvetica;
    font-size: 25px;
  }
`;

export const RegisterTable = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background: #fff;
  color: #000;

  table {
    margin-top: 56px;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    color: #000;
  }

  .tbl-header {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .tbl-content {
    height: 300px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  th {
    text-align: center;
    vertical-align: middle;
    font-weight: 500;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #000;
    border: solid 1px #29abe2;
  }
`;

export const RegisterTableTilte = styled.div``;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url(${FooterImage}) no-repeat center;
  background-size: cover;
  width: 100%;
  align-items: center;
  color: #fff;
  padding: 24px;
  font-family: 'Roboto';
  font-weight: 300;

  p {
    margin: 16px;
  }
`;
