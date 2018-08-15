import styled from 'styled-components';

export const Row = styled.div`
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

export const SuccessMessage = styled.span`
  margin-left: 20px;
  font-size: 12px;
  font-weight: 700;
  color: #44CBD1;
  display: block;
`;

export const ErrorMessage = styled.span`
  margin-left: 20px;
  font-size: 12px;
  font-weight: 700;
  color: #F06A69;
  display: block;
`;