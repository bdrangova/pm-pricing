import styled from 'styled-components';

export const PopularLine = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  margin-rigth: -50%;
  transform: translate(-50%, 0);
  color: #99c47d;
  font-weight: bolder;
  font-size: 15px;
  text-align: center;
`;

const FlexDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled(FlexDisplay)`
  padding: 3rem 1rem;
  border: 1px solid #d9d9d9;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;

export const TitleWrapper = styled(FlexDisplay)`
  h3 {
    text-align: center;
    margin: 0.4rem 0;
    font-size: 20px;
    font-weight: 900;
  }
`;

export const Headline = styled.p`
  font-size: 17px;
  text-align: center;
  margin: 0.4rem 0;
`;

export const PriceRow = styled.p`
  text-align: center;
  margin: 0.4rem 0;
  font-size: 13px;
`;

export const Price = styled.span`
  font-size: 26px;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  ul {
    list-style: none;
    margin: 1rem;
  }
  li {
    margin: 1rem 0;
    font-size: 14px;
  }
  li:before {
    content: '\\2192 \\0020';
  }
`;

export const ButtonWrapper = styled.div`
  width: 40%;
  align-self: center;
  button {
    width: 100%;
    background-color: #109ceb;
    color: #ffffff;
    border-radius: 2px;
    border: 0;
    padding: 0.7rem;
    align-self: center;
  }
  button:hover {
    cursor: pointer;
    background-color: #5ab5e8;
  }
`;
