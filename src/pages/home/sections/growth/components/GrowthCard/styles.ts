import styled from "styled-components";
import type { HighlightProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 2rem;
  background: rgb(255, 255, 255);  
  padding: 2rem;
  border-radius: 0.8rem;
`;

export const SmallTitle = styled.h2`
    font-size: 2rem;
    color: #000;
    font-weight: 700;
`;

export const Highlight = styled.h3<HighlightProps>`
    font-size: 3rem;
    color: ${(props) => props.color};
`