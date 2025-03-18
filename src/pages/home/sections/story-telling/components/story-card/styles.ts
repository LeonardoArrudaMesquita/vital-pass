import styled from "styled-components";
import type { SituationProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

export const Situation = styled.p<SituationProps>`
  &::before {
    content: "•";
    margin-right: 10px;
    color: ${(props) => props.color};
    font-size: 2rem;    
  }

  color: ${(props) => props.color};
  font-size: 1.6rem;
  font-weight: 700;
`;

export const SmallTitle = styled.p`
    font-size: 2rem;
    color: #000;
    font-weight: 700;
`;