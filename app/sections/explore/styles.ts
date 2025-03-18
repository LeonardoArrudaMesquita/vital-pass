import { styled } from "styled-components";

import photo from "/hands-hold-mobile-phone-click-checkmark.jpg";

export const MainContainer = styled.div`
  background: rgb(255, 255, 255);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  padding-top: 0;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const Photo = styled.img`
  background-image: url(${photo});
  height: 85%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media only screen and (max-width: 1024px) {
    padding-top: 5rem;
  }
`;

export const SubTitle = styled.h2`
  color: #000;
  text-transform: uppercase;
  font-size: 1.6rem;
`;
