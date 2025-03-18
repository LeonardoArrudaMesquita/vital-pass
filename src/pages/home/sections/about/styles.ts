import { styled } from "styled-components";
import photo from "/front-view-old-man-scooter.jpg";

export const MainContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 250, 240, 1) 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem;
  column-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const Photo = styled.img`
  border-radius: 3rem;
  background-image: url(${photo});
  height: 85%;
  width: 35%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 7px 5px rgb(0, 0, 0, 0.1);

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  row-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const SubTitle = styled.h2`
  color: #6ee7d6;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: gray;
  font-weight: 500;
`;
