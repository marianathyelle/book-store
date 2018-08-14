import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;

  h2 {
    margin-bottom: 10px;
  }  

  a {
    padding: 10px;
    border: 1px solid #44CBD1;
    border-radius: 3px;
    color: #44CBD1;
    transition: 0.3s;

    &:hover {
      background-color: #44CBD1;
      color: #FFF;
    }
  }
`;