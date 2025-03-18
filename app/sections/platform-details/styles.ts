import { styled } from "styled-components";

export const MainContainer = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(210,250,240,1) 100%);
  height: 100vh;
  display: flex;
  padding: 5rem;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: auto;
    flex-direction: column;
  }
`;

export const List = styled.ul`
  list-style-type: square;
  max-width: 50%;

  @media only screen and (max-width: 1024px) {
    order: 2;
    margin-top: 5rem;
    max-width: 100%;
  }
`;

export const ListItem = styled.li`
  &::marker {
    color: #6EE7D6;
  }

  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
    font-size: 1.6rem;
    margin-bottom: 3rem;    
    color: gray;
`