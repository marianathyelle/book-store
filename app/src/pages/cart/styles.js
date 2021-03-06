import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 50px;
  padding: 50px 0;

  h1 {
    margin-bottom: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
`;

export const Item = styled.div`
  display: flex;
  margin: 0 30px 30px 0;

  img {
    margin: 0 20px 20px 0;
    width: 80px;
    height: 122px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  strong {
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 2px;
  }

  div span {
    font-size: 14px;

    &:first-child {
      color: #5f6060;
      margin-right: 10px;
      font-weight: 700;
    }
  }
`;

export const Calculate = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 20px;
    background: transparent;
    border-radius: 5px;
    color: #44CBD1;
    font-weight: 700;
    text-transform: uppercase;
    border-color: #44CBD1;
    transition: all 0.3s;
    margin-top: 20px;

    &:hover,
    &:active,
    &:focus {
      color: #FFF;
      background-color: #44CBD1;
    }
  }
`;

export const ShowDetails = styled.span`
  font-weight: 700;
  color: #F06A69;
`;

export const Delete = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: -20px;

  img {
    height: 15px;
    width: 15px;
    margin: 0;
  }
`;