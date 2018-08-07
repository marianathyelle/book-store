import styled from 'styled-components';

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

export const Box = styled.a`
  padding: 20px;
  background: linear-gradient(to top, ${props => props.firstColor} 0%, ${props => props.secondColor} 100%);
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  display: flex;
  width: 400px;
  height: auto;
  transition: all 0.3s;
  margin: 0 20px 20px 0;

  &:hover {
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.2);
  }

  img {
    width: 100px;
    height: 152px;
    border-radius: 5px;
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
  }

  small {
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  span {
    font-weight: 700;
  }
`;