import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 26px;
  color: #515151;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const Box = styled(Link)`
  padding: 20px;
  background: linear-gradient(to top, ${props => props.primarycolor} 0%, ${props => props.secondarycolor} 100%);
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  display: flex;
  width: 420px;
  height: auto;
  transition: all 0.3s;
  margin: 0 20px 20px 0;

  &:hover {
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.2);
  }

  img {
    width: 100px;
    height: 152px;
    border-radius: 3px;
    margin-right: 10px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;

  strong,
  small,
  p,
  span {
    color: #FFF;
  }

  strong {
    margin-bottom: 5px;
    text-shadow: 3px 5px 8px ${props => props.primarycolor};
  }

  small {
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 15px;
    text-shadow: 3px 5px 10px ${props => props.primarycolor};
  }

  span {
    font-weight: 700;
  }
`;