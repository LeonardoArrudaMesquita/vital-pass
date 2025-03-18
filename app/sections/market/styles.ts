import { styled } from "styled-components";

export const MainContainer = styled.div`
  background: rgb(255, 255, 255);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    height: auto;
    row-gap: 5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  margin: auto;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    row-gap: 4rem;
  }
`;
