import styled from "styled-components";

export const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 250, 240, 1) 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  column-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    height: auto;
    row-gap: 5rem;
    padding: 5rem 0 0 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  padding: 0 5rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, auto);
  margin: auto;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, auto);
  }
`;
