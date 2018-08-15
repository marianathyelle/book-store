import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
`;

export const Logo = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: #44CBD1;
`;

export const Nav = styled.ul`
  display: flex;
  
  li {
    margin-left: 15px;

    &:first-child {
      margin: 0;
    }
  }

  a {
    font-size: 14px;
    font-weight: 700;
    color: #44CBD1;
    text-decoration: none;
    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
      color: #F06A69;
    }
  }

  span {
    font-size: 11px;
    background-color: #F06A69;
    color: #FFF;
    border-radius: 50px;
    padding: 5px;
    position: relative;
    left: 5px; 
  }
`;