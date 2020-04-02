import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h2 {
    margin: 2rem 0;
  }

  @media screen and (min-width: 601px) and (max-width: 1366px) {
    margin: 1rem 5rem;
  }

  @media screen and (max-width: 600px) {
    margin: 1rem 3rem;
  }
`;

export const Dropdowns = styled.div`
  align-self: flex-end;
  select {
    width: 7rem;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 0.4rem;
    background-color: inherit;
    margin-left: 5px;
  }
`;
