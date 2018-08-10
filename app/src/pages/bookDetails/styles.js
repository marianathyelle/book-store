import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  margin: 0 50px;
  padding: 50px 0;

  ${Spinner} {
    height: 48px;
  }

  ${props => props.loading && css`
    height: 100%;
    display: flex;
    justify-content: center;
  `}
`;

export const Book = styled.div`
  display: flex;

  @media screen and (max-width: 541px) {
    display: block;
  }

  img {
    margin: 0 20px 30px 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  small {
    margin-bottom: 10px;
    color: #F06A69;
  }

  p {
    font-size: 14px;
    margin-bottom: 30px;
  }

  strong {
    color: #44CBD1;
    margin-bottom: 20px;
  }
`;

