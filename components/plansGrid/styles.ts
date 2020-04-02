import styled from 'styled-components';

export const Grid = styled.div`
  margin: 1rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 601px) and (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
