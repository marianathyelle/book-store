import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 26px;
  color: #515151;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.a`
  display: flex;
  margin: 0 30px 30px 0;
  color: #000;

  img {
    margin-right: 10px;
    width: 80px;
    height: 122px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 12px;
      margin-bottom: 5px;
    }

    small {
      font-size: 10px;
      color: #8e8e8e;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
    }
  }
`