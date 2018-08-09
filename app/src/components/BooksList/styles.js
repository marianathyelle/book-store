import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 26px;
  color: #515151;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled(Link)`
  display: flex;
  margin: 0 30px 40px 0;
  color: #000;
  padding: 10px;
  transition: all 0.3s;
  width: 300px;

  &:hover {
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
  }

  img {
    margin-right: 10px;
    width: 80px;
    height: 122px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 14px;
      margin-bottom: 3px;
    }

    small {
      font-size: 11px;
      color: #f06a69;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
    }
  }
`