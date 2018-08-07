import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 50px;
  padding: 50px 0;
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

  input,
  button {
    padding: 10px;
    border-radius: 5px;
  }

  input {
    width: 100px;
    border: 1px solid #44CBD1;
    margin: 0 20px 20px 0;
  }
  
  button {
    color: #44CBD1;
    border-color: #44CBD1;
    transition: all 0.3s;
    font-weight: 700;

    &:hover,
    &:focus,
    &:active {
      background-color: #44CBD1;
      color: #FFF; 
    }
  }
`;

